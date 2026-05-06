import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
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

// Build grid lines
let grid = '';
for (let x = 0; x <= W; x += 50) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${C.lime}" stroke-width="1" opacity="0.03"/>`;
for (let y = 0; y <= H; y += 50) grid += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${C.lime}" stroke-width="1" opacity="0.03"/>`;

const eyebrowText = 'ARDENT STUDIO · PALM BEACH COUNTY';
// approx text width for mono 16px: ~9.6px per char
const eyebrowFontSize = 16;
const eyebrowCharW = 13;
const eyebrowTextW = eyebrowText.length * eyebrowCharW;
const lineLen = 40;
const gap = 16;
const eyebrowTotalW = eyebrowTextW + (gap + lineLen) * 2;
const eyebrowStartX = (W - eyebrowTotalW) / 2;
const eyebrowY = 110;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  ${grid}

  <!-- Eyebrow -->
  <line x1="${eyebrowStartX}" y1="${eyebrowY}" x2="${eyebrowStartX + lineLen}" y2="${eyebrowY}" stroke="${C.lime}" stroke-width="2"/>
  <text x="${W/2}" y="${eyebrowY}" text-anchor="middle" dominant-baseline="middle"
        font-family="'JetBrains Mono', 'Courier New', monospace" font-size="${eyebrowFontSize}"
        fill="${C.lime}" letter-spacing="3">${eyebrowText}</text>
  <line x1="${eyebrowStartX + eyebrowTotalW - lineLen}" y1="${eyebrowY}" x2="${eyebrowStartX + eyebrowTotalW}" y2="${eyebrowY}" stroke="${C.lime}" stroke-width="2"/>

  <!-- Row 1: Listen. Build. -->
  <text x="${W/2}" y="260" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="100">
    <tspan fill="${C.lime}">Listen.</tspan><tspan fill="${C.paper}"> </tspan><tspan fill="${C.cyan}">Build.</tspan>
  </text>

  <!-- Row 2: Train. Repeat. -->
  <text x="${W/2}" y="380" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="100">
    <tspan fill="${C.coral}">Train.</tspan><tspan fill="${C.paper}"> </tspan><tspan fill="${C.mint}">Repeat.</tspan>
  </text>

  <!-- Subtitle -->
  <text x="${W/2}" y="490" text-anchor="middle"
        font-family="'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="300"
        fill="${C.paper}" opacity="0.9">AI consulting, training, and tools for business</text>

  <!-- URL -->
  <text x="${W/2}" y="565" text-anchor="middle"
        font-family="'JetBrains Mono', 'Courier New', monospace" font-size="20" font-weight="500"
        fill="${C.lime}" letter-spacing="4">ARDENTSTUDIO.IO</text>
</svg>`;

const outPath = resolve('public/og-image.png');
mkdirSync(dirname(outPath), { recursive: true });

await sharp(Buffer.from(svg))
  .png()
  .resize(W, H)
  .toFile(outPath);

const meta = await sharp(outPath).metadata();
console.log(`Wrote ${outPath} — ${meta.width}x${meta.height}`);
