import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { dirname, resolve } from 'path';

const W = 1200, H = 630;
const C = {
  bg: '#0D0D0D',
  paper: '#F7F3EC',
  lime: '#C3F73A',
  cyan: '#4FC3F7',
  coral: '#FF6B6B',
  mint: '#6EDDC4',
};

const M = 80; // left margin

// Faint lime grid (matches site hero)
let grid = '';
for (let x = 0; x <= W; x += 50) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${C.lime}" stroke-width="1" opacity="0.03"/>`;
for (let y = 0; y <= H; y += 50) grid += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${C.lime}" stroke-width="1" opacity="0.03"/>`;

// Lockup A (Horizontal), dark treatment, bottom-left at 48px cap height.
// Inter SemiBold cap height ~= 0.727em -> font-size for 48px caps:
const lockupFontSize = Math.round(48 / 0.727); // 66
const lockupBaseline = H - 56;
const markR = 34;
const markCx = M + markR;
const markCy = lockupBaseline - 24;
const wordmarkX = markCx + markR + 26;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  ${grid}

  <!-- Kicker: Listen. Build. Train. Repeat. -->
  <line x1="${M}" y1="118" x2="${M + 44}" y2="118" stroke="${C.lime}" stroke-width="2"/>
  <text x="${M + 62}" y="118" dominant-baseline="middle"
        font-family="'JetBrains Mono', monospace" font-size="19"
        letter-spacing="4">
    <tspan fill="${C.lime}">LISTEN.</tspan><tspan dx="14" fill="${C.cyan}">BUILD.</tspan><tspan dx="14" fill="${C.coral}">TRAIN.</tspan><tspan dx="14" fill="${C.mint}">REPEAT.</tspan>
  </text>

  <!-- Headline -->
  <text x="${M}" y="252" font-family="Inter, sans-serif" font-weight="800"
        font-size="80" letter-spacing="-2" fill="${C.paper}">AI tools for the way</text>
  <text x="${M}" y="348" font-family="Inter, sans-serif" font-weight="800"
        font-size="80" letter-spacing="-2">
    <tspan fill="${C.paper}">business</tspan><tspan dx="22" fill="${C.lime}">already works</tspan>
  </text>

  <!-- Proof line -->
  <text x="${M}" y="430" font-family="'JetBrains Mono', monospace" font-size="22"
        letter-spacing="3" fill="${C.paper}" opacity="0.62">FIXED PRICE · 2–4 WEEKS · YOU OWN IT</text>

  <!-- Lockup A: [mark] Ardent.Studio -->
  <circle cx="${markCx}" cy="${markCy}" r="${markR}" fill="none" stroke="${C.paper}" stroke-width="4"/>
  <text x="${markCx}" y="${markCy}" text-anchor="middle" dominant-baseline="central"
        font-family="Inter, sans-serif" font-weight="600" font-size="40"
        fill="${C.paper}">A</text>
  <circle cx="${markCx + markR * 0.71}" cy="${markCy - markR * 0.71}" r="7" fill="${C.lime}"/>
  <text x="${wordmarkX}" y="${lockupBaseline}" font-family="Inter, sans-serif" font-weight="600"
        font-size="${lockupFontSize}" letter-spacing="${(-0.01 * lockupFontSize).toFixed(2)}">
    <tspan fill="${C.paper}">Ardent</tspan><tspan fill="${C.lime}">.</tspan><tspan fill="${C.paper}">Studio</tspan>
  </text>
</svg>`;

const outPath = resolve('public/og-image.png');
mkdirSync(dirname(outPath), { recursive: true });

await sharp(Buffer.from(svg))
  .png()
  .resize(W, H)
  .toFile(outPath);

const meta = await sharp(outPath).metadata();
console.log(`Wrote ${outPath} — ${meta.width}x${meta.height}`);
