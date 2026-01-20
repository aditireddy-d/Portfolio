# Creating a Professional OG Image for LinkedIn

The OG image (Open Graph image) is what shows when you share your portfolio link on LinkedIn, Twitter, etc.

## Current Status
- Updated version number to v=5 to force cache refresh
- Updated script to generate professional dark-themed image

## To Generate the New OG Image:

### Option 1: Run the Script (Recommended)
```bash
node scripts/create-og-image.js
```

This will create a professional dark-themed OG image at `public/portfolio-og-image.png`

### Option 2: Manual Creation
Create an image with these specifications:
- **Size**: 1200x630 pixels (OG image standard)
- **Background**: Black (#000000)
- **Design**: 
  - Left side: Your name "Aditi Reddy Doma" in large white text
  - "Data Scientist & Machine Learning Engineer" subtitle
  - "Giving silent data a voice" tagline
  - Right side: Your profile photo
  - Blue accent line at bottom
- **Font**: Professional sans-serif (Arial, Helvetica, etc.)
- **Colors**: 
  - Background: Black
  - Text: White
  - Accent: Blue (#3b82f6)
  - Photo border: Dark slate

### Option 3: Use Online Tools
You can use tools like:
- Canva (1200x630 template)
- Figma
- Adobe Express

## After Creating the Image:
1. Save it as `portfolio-og-image.png` in the `public/` folder
2. Commit and push the changes
3. Deploy: `npm run deploy`
4. Test the preview using: https://www.linkedin.com/post-inspector/

## Note:
LinkedIn caches OG images, so it may take 24-48 hours to update. You can use LinkedIn's Post Inspector to force a refresh.

