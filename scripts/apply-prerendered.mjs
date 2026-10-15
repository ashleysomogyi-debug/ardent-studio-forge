#!/usr/bin/env node
/**
 * Runs after `vite build` on Vercel. Takes the finished pages saved in prerendered/
 * (made by the GitHub Action) and puts them into dist/.
 *
 * The saved pages may come from an older build, so their script and stylesheet tags
 * are swapped for the ones in the fresh dist/index.html. Only the page text, title,
 * canonical and structured data come from the saved copy.
 *
 * Never fails the build: anything unexpected leaves the plain build in place.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const saved = path.join(root, "prerendered");
const SHELL_ONLY_ROUTES = ["/wow"]; // key-gated: never ship saved content

const log = (m) => console.log(`[apply-prerendered] ${m}`);
const ASSET_TAGS = [
  /<script\b[^>]*\btype="module"[^>]*\bsrc="\/assets\/[^"]*"[^>]*><\/script>\s*/g,
  /<link\b[^>]*\brel="modulepreload"[^>]*>\s*/g,
  /<link\b[^>]*\brel="stylesheet"[^>]*\bhref="\/assets\/[^"]*"[^>]*>\s*/g,
];
const assetTags = (html) => ASSET_TAGS.flatMap((re) => html.match(re) || []);
const stripAssets = (html) => ASSET_TAGS.reduce((h, re) => h.replace(re, ""), html);

async function findIndexFiles(dir, base = "") {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true }).catch(() => [])) {
    const rel = path.posix.join(base, e.name);
    if (e.isDirectory()) out.push(...(await findIndexFiles(path.join(dir, e.name), rel)));
    else if (e.name === "index.html") out.push(base || "/");
  }
  return out;
}

try {
  const shell = await fs.readFile(path.join(dist, "index.html"), "utf8");
  const fresh = assetTags(shell);
  if (!fresh.some((t) => t.includes("<script"))) throw new Error("no app script found in dist/index.html");

  const routes = (await findIndexFiles(saved)).map((r) => (r === "/" || r === "" ? "/" : "/" + r.replace(/^\//, "")));
  let applied = 0;
  for (const route of routes) {
    const file = path.join(saved, route === "/" ? "" : route, "index.html");
    const html = await fs.readFile(file, "utf8");
    if (!html.includes("</head>") || !/<div id="root">[\s\S]{200,}/.test(html)) continue;
    const merged = stripAssets(html).replace("</head>", `${fresh.join("")}</head>`);
    const out = route === "/" ? path.join(dist, "index.html") : path.join(dist, route, "index.html");
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, merged);
    applied++;
  }
  for (const route of SHELL_ONLY_ROUTES) {
    const out = path.join(dist, route, "index.html");
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, shell);
  }
  log(`applied ${applied} saved pages`);
} catch (err) {
  console.warn(`[apply-prerendered] skipped: ${String(err.message).split("\n")[0]}. Plain build left in place.`);
}
