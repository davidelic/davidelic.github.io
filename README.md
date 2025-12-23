# Davide Liconti - Personal Website

Personal academic website hosted on GitHub Pages.

## Setup Instructions

1. **Create a GitHub repository** with the name `yourusername.github.io` (replace `yourusername` with your GitHub username)

2. **Push this code to your repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Add your media files:**
   - Place your profile picture in `media/profile/profile.jpg`
   - Add publication GIFs/images to `media/publications/`
   - Add project images to `media/projects/`
   - Add VLA visualization images to `media/vla-focus/`

5. **Update Google Scholar link:**
   - Edit `index.html` and replace `YOUR_ID` in the Google Scholar link with your actual Google Scholar ID

6. **Your website will be live at:** `https://yourusername.github.io`

## File Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── media/
    ├── profile/        # Profile picture
    ├── publications/   # Publication GIFs/images
    ├── projects/       # Project images
    └── vla-focus/      # VLA research visualizations
```

## Customization

- **Colors:** Edit the CSS variables in `styles.css` (in the `:root` selector)
- **Content:** Edit `index.html` to update any text or add/remove sections
- **Media:** Add your images/GIFs to the respective folders in `media/`

## Features

- ✅ Responsive design (mobile-friendly)
- ✅ Modern, colorful design with smooth animations
- ✅ Interactive publication media viewers
- ✅ Modal image viewer for full-size images
- ✅ Smooth scrolling and fade-in animations
- ✅ Clean, professional layout

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

