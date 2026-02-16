# 🐕 Benji AI Showcase

A modern, single-page website showcasing Benji - Agent10's intelligent AI assistant with local RAG memory, smart caching, and multi-agent architecture.

## 🎨 Features

- **Dark Terminal Aesthetic** - Cyberpunk/hacker-inspired design with green/cyan accents
- **Fully Responsive** - Optimized for mobile and desktop viewing
- **Animated Stats** - Counter animations that trigger on scroll
- **ASCII Architecture Diagram** - Visual representation of the system flow
- **Interactive Elements** - Hover effects, smooth scrolling, parallax backgrounds
- **Easter Egg** - Hidden Konami code activation (↑↑↓↓←→←→BA)
- **Zero Dependencies** - Pure HTML, CSS, and vanilla JavaScript

## 📁 File Structure

```
benji-showcase/
├── index.html          # Main HTML file with all content
├── styles.css          # Dark mode terminal styling
├── script.js           # Interactive animations and effects
└── README.md          # This file
```

## 🚀 Deployment to GitHub Pages

### Option 1: One-Click Deployment (Recommended)

1. **Enable GitHub Pages:**
   - Go to your repository: `https://github.com/agent10-openclaw/benji-showcase`
   - Click **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose branch: **main** and folder: **/ (root)**
   - Click **Save**

2. **Access Your Site:**
   - Your site will be live at: `https://agent10-openclaw.github.io/benji-showcase/`
   - Initial deployment takes 1-2 minutes

### Option 2: GitHub Actions (Advanced)

1. Create `.github/workflows/static.yml`:
```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Push changes and the action will auto-deploy

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/agent10-openclaw/benji-showcase.git
   cd benji-showcase
   ```

2. **Open in browser:**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     python3 -m http.server 8000
     # Visit http://localhost:8000
     ```

3. **Live Server (VS Code):**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

## 🎯 Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #0a0e14;        /* Main background */
    --accent-primary: #00ff9f;    /* Primary accent (green) */
    --accent-secondary: #00d4ff;  /* Secondary accent (cyan) */
}
```

### Update Stats

Modify `data-target` attributes in `index.html`:

```html
<div class="stat-card-value" data-target="50000">0</div>
```

### Edit Content

All content is in `index.html` - update text, sections, or add new features directly.

## 🔧 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **GitHub Pages** - Free static hosting

## 📊 Sections Included

1. **Hero** - Terminal window with animated typing effect
2. **Features** - 6 key features with hover effects
3. **Architecture** - ASCII diagram + flow explanation
4. **Stats Dashboard** - 6 animated statistics
5. **Tech Stack** - Technology grid
6. **Footer** - Links and attribution

## 🎨 Design Philosophy

- **Terminal Aesthetic** - Monospace fonts, command-line vibes
- **Dark Mode First** - Easy on the eyes, professional look
- **Green/Cyan Accents** - Matrix-inspired color scheme
- **Minimalist** - Clean, focused, no clutter
- **Performance** - Fast load, no external dependencies

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

None! But if you find any:
1. Open an issue on GitHub
2. Or fix it and submit a PR

## 📝 License

MIT License - Feel free to fork, modify, and use for your own projects.

## 🙏 Credits

Built by **Agent10** using **OpenClaw** framework  
Powered by **Claude**, **Pinecone**, **Valkey**, and **Ollama**

---

**Ready to deploy?** Just enable GitHub Pages and you're live! 🚀
