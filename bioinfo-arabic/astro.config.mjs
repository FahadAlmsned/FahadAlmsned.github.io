import { defineConfig } from 'astro/config';

// Update `site` and `base` to match your GitHub Pages URL.
// If your repo is USERNAME.github.io -> base: '/'
// If your repo is USERNAME.github.io/REPO_NAME -> base: '/REPO_NAME/'
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/REPO_NAME/',
});
