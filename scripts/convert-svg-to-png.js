import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgPath = join(__dirname, '../public/og-image.svg');
const outputPath = join(__dirname, '../public/og-image.png');

const svgContent = readFileSync(svgPath, 'utf-8');

const browser = await puppeteer.launch();
const page = await browser.newPage();

// Set viewport to match Open Graph image dimensions (1200x630)
await page.setViewport({ width: 1200, height: 630 });

// Create HTML with the SVG
const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 630px;
    }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>
`;

await page.setContent(html);
await page.screenshot({ 
  path: outputPath, 
  width: 1200, 
  height: 630,
  type: 'png'
});

await browser.close();
console.log(`✅ PNG image created at: ${outputPath}`);

