# GitHub Pages Deployment Setup

## Current Configuration
- **Framework**: React + Vite
- **Build Output**: `dist/` folder
- **Deployment Method**: GitHub Actions
- **Base Path**: `/Dao-Yu-101-kebei/`
- **SPA Routing**: Supported via 404.html fallback

## Required GitHub Pages Settings

1. **Navigate to your repository on GitHub**
2. **Go to Settings** → **Pages**
3. **Source Settings**:
   - **Source**: Deploy from a GitHub Actions workflow
   - **Branch**: main (this is automatically handled by the workflow)
   - **Folder**: (leave empty - the workflow handles this)

## Workflow Features
- Automatically triggers on push to main
- Installs dependencies with npm
- Builds the project with `npm run build`
- Copies 404.html for SPA routing support
- Deploys to GitHub Pages

## Build Configuration
- **Package.json**: Build script is `vite build`
- **vite.config.js**: Base path set to `/Dao-Yu-101-kebei/`
- **index.html**: Base href set to `/Dao-Yu-101-kebei/`

## Testing
After deployment, test:
- Direct page access: https://7miwork.github.io/Dao-Yu-101-kebei/
- Deep linking: https://7miwork.github.io/Dao-Yu-101-kebei/some-route
- SPA routing should work correctly

## Troubleshooting
If the site doesn't load:
1. Verify GitHub Pages source is set to "Deploy from a GitHub Actions workflow"
2. Check workflow runs in Actions tab
3. Ensure build completes successfully
4. Verify the `dist/` folder is being deployed