import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const profilePhotoPath = join(__dirname, '../public/profile-photo.jpg');
const outputPath = join(__dirname, '../public/portfolio-og-image.png');

const browser = await puppeteer.launch();
const page = await browser.newPage();

// Set viewport to Open Graph recommended size (1200x630)
await page.setViewport({ width: 1200, height: 630 });

// Create HTML with professional dark theme design
const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      width: 1200px;
      height: 630px;
      background: #000000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      padding: 60px 80px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    .left-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      z-index: 2;
      text-align: center;
    }
    .welcome-text {
      font-size: 64px;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    .welcome-text .name {
      color: #3b82f6;
      font-weight: 700;
    }
    .photo-wrapper {
      width: 400px;
      height: 400px;
      border-radius: 20px;
      overflow: hidden;
      border: 3px solid #1e293b;
      box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
      flex-shrink: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .accent-line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6 0%, #1e40af 100%);
    }
  </style>
</head>
<body>
  <div class="left-content">
    <div class="welcome-text">Welcome to <span class="name">Aditi's</span> Portfolio</div>
  </div>
  <div class="photo-wrapper">
    <img src="file://${profilePhotoPath}" alt="Aditi Reddy" />
  </div>
  <div class="accent-line"></div>
</body>
</html>
`;

await page.setContent(html);
// Wait for image to load
await new Promise(resolve => setTimeout(resolve, 2000));

await page.screenshot({ 
  path: outputPath, 
  width: 1200, 
  height: 630,
  type: 'png'
});

await browser.close();
console.log(`✅ Open Graph image created at: ${outputPath}`);

