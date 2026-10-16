// Tell Bing and other IndexNow search engines which pages exist / changed.
// Reads the URLs from public/sitemap.xml and posts them to the IndexNow API.
// The key is the name of the .txt file in public/ whose content equals its own name.
import { readFileSync, readdirSync } from "node:fs";

const HOST = "ardentstudio.io";
const keyFile = readdirSync("public").find(
  (f) => /^[0-9a-f]{32}\.txt$/.test(f) && readFileSync(`public/${f}`, "utf8").trim() === f.replace(".txt", ""),
);
if (!keyFile) {
  console.error("No IndexNow key file found in public/");
  process.exit(1);
}
const key = keyFile.replace(".txt", "");
const xml = readFileSync("public/sitemap.xml", "utf8");
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, status ${res.status}`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
