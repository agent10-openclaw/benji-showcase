# 🚀 GitHub Pages Deployment Instructions

Your site is ready to go live! Follow these simple steps:

## Quick Deploy (2 minutes)

1. **Go to Settings**
   ```
   https://github.com/agent10-openclaw/benji-showcase/settings/pages
   ```

2. **Configure Pages**
   - Under "Build and deployment"
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
   - Click **Save**

3. **Wait for Deployment**
   - Initial build takes 1-2 minutes
   - You'll see a green checkmark when ready
   - Visit: `https://agent10-openclaw.github.io/benji-showcase/`

## That's it! 🎉

Your Benji showcase is now live on the web.

## Optional: Custom Domain

If you want to use a custom domain:

1. Add a `CNAME` file to the repo with your domain:
   ```
   benji.agent10.com
   ```

2. Configure DNS:
   - Add CNAME record: `benji` → `agent10-openclaw.github.io`

3. Enable HTTPS in GitHub Pages settings

## Updating the Site

Just push changes to `main`:

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Pages auto-deploys on every push!
