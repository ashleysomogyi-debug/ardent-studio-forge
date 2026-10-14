#!/usr/bin/env node
/**
 * Post-build prerender for the Vite single-page app.
 *
 * Why: every page on this site is drawn by JavaScript, so a crawler that does not
 * run JavaScript sees an empty shell. This script opens each page in headless
 * Chromium, waits for it to draw, and saves the finished HTML into dist/. Visitors
 * still get the normal app: the browser shows the saved HTML first, then the app
 * takes over.
 *
 * Safe by default: any failure leaves the plain build in dist/ untouched and exits 0,
 * so a prerender problem can never block a deploy. Set PRERENDER_STRICT=1 to exit
 * non-zero on failure instead.
 *
 * Usage:  npm run build:prerender
 * Env:    PRERENDER_CHROMIUM  path to a Chromium binary (skips the browser download)
 *         PRERENDER_STRICT    "1" to fail the build when anything goes wrong
 */
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE = "https://www.ardentstudio.io";
const strict = process.env.PRERENDER_STRICT === "1";

// Pages outside the sitemap that still get their own saved HTML, so opening one
// directly never flashes the home page first.
const EXTRA_ROUTES = ["/events/pooches-pearls-prosecco"];

// Key-gated pages. Their content must not be baked into static HTML, but they still
// need their own plain app shell so a direct visit does not flash the saved home page.
const SHELL_ONLY_ROUTES = ["/wow"];

const log = (m) => console.log(`[prerender] ${m}`);
const warn = (m) => console.warn(`[prerender] ${m}`);
const bail = (m) => {
  warn(m);
  process.exit(strict ? 1 : 0);
};

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};

const shell = await fs.readFile(path.join(dist, "index.html"), "utf8").catch(() => null);
if (!shell) bail("dist/index.html not found. Run the Vite build first.");

const sitemap = await fs.readFile(path.join(root, "public", "sitemap.xml"), "utf8").catch(() => "");
const sitemapRoutes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const routes = [...new Set(["/", ...sitemapRoutes, ...EXTRA_ROUTES])];

// Tiny static server over dist/ with the same fallback the real host uses:
// real files are served as-is, everything else gets the original shell.
const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const file = path.join(dist, path.normalize(urlPath));
    if (!file.startsWith(dist)) return res.writeHead(403).end();
    const stat = await fs.stat(file).catch(() => null);
    if (stat?.isFile()) {
      const body = await fs.readFile(file);
      return res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" }).end(body);
    }
    return res.writeHead(200, { "content-type": MIME[".html"] }).end(shell);
  } catch {
    return res.writeHead(500).end();
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

let chromium;
try {
  ({ chromium } = await import("@playwright/test"));
} catch {
  server.close();
  bail("Playwright is not installed. Leaving the plain build in place.");
}

// Build containers usually run as root, where Chromium refuses to start with its sandbox on.
const isRoot = typeof process.getuid === "function" && process.getuid() === 0;
const launch = () =>
  chromium.launch({
    executablePath: process.env.PRERENDER_CHROMIUM || undefined,
    args: isRoot ? ["--no-sandbox"] : [],
  });
let browser;
let launchError;
try {
  browser = await launch();
} catch (err) {
  launchError = err;
  if (!process.env.PRERENDER_CHROMIUM) {
    warn("Chromium not found. Trying to download it once.");
    try {
      execSync("npx playwright install chromium", { stdio: "inherit", cwd: root });
      browser = await launch();
    } catch (installErr) {
      launchError = installErr;
    }
  }
}
if (!browser) {
  server.close();
  bail(`Could not start Chromium (${String(launchError?.message).split("\n")[0]}). Leaving the plain build in place.`);
}

const done = [];
const skipped = [];

try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  // Load only from the local server. Analytics, fonts and remote images are not
  // needed to read the page text.
  await context.route("**/*", (route) => {
    const host = new URL(route.request().url()).hostname;
    return host === "127.0.0.1" ? route.continue() : route.abort();
  });

  for (const route of SHELL_ONLY_ROUTES) {
    const out = path.join(dist, route, "index.html");
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, shell);
    done.push(`${route} (app shell only)`);
  }

  for (const route of routes) {
    const page = await context.newPage();
    try {
      await page.goto(origin + route, { waitUntil: "load", timeout: 30000 });
      await page.waitForSelector("h1, main", { timeout: 15000 });

      if (new URL(page.url()).pathname !== route) {
        throw new Error(`redirected to ${new URL(page.url()).pathname}`);
      }

      // Pages in the sitemap must have set their own canonical before we save them.
      if (!EXTRA_ROUTES.includes(route)) {
        const expected = `${SITE}${route === "/" ? "/" : route}`;
        await page.waitForFunction(
          (url) => document.querySelector('link[rel="canonical"]')?.getAttribute("href") === url,
          expected,
          { timeout: 8000 },
        );
      }

      await page.waitForTimeout(400); // let effects such as FAQ schema attach

      const text = await page.evaluate(() => document.body.innerText.replace(/\s+/g, " ").trim());
      if (text.length < 300) throw new Error(`only ${text.length} characters of text`);

      const html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
      const out = route === "/" ? path.join(dist, "index.html") : path.join(dist, route, "index.html");
      await fs.mkdir(path.dirname(out), { recursive: true });
      await fs.writeFile(out, html);
      done.push(route);
    } catch (err) {
      skipped.push(`${route} (${String(err.message).split("\n")[0]})`);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
  server.close();
}

log(`saved ${done.length} of ${routes.length + SHELL_ONLY_ROUTES.length} pages`);
if (skipped.length) {
  warn(`skipped ${skipped.length}:`);
  skipped.forEach((s) => warn(`  ${s}`));
}
if (strict && skipped.length) process.exit(1);
