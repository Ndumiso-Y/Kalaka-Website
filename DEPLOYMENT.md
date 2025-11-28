# GitHub Pages Deployment Setup

## Enable GitHub Pages (Required - One-time Setup)

The GitHub Actions workflow is configured and will run automatically, but you need to **enable GitHub Pages** on the repository first.

### Steps to Enable GitHub Pages:

1. Go to your repository on GitHub: [https://github.com/Ndumiso-Y/Kalaka-Website](https://github.com/Ndumiso-Y/Kalaka-Website)

2. Click on **Settings** tab

3. In the left sidebar, click on **Pages**

4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (not "Deploy from a branch")

5. Click **Save**

6. The workflow will automatically trigger and deploy the site

7. After deployment (usually 2-3 minutes), your site will be live at:
   **https://ndumiso-y.github.io/Kalaka-Website/**

## Deployment Status

- ✅ GitHub Actions workflow configured (`.github/workflows/deploy.yml`)
- ✅ Vite configured for GitHub Pages (`base: '/Kalaka-Website/'`)
- ⚠️ GitHub Pages needs to be enabled in repository settings (see steps above)

## Automatic Deployments

Once GitHub Pages is enabled, every push to the `main` branch will automatically:
1. Build the React application
2. Deploy to GitHub Pages
3. Update the live website

## Manual Deployment Trigger

You can also manually trigger deployment from the **Actions** tab:
1. Go to **Actions** tab in the repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

---

**Note:** The first deployment may take a few extra minutes. Subsequent deployments are typically faster (1-2 minutes).
