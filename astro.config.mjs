// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at https://slcky.github.io/ivylabs-site/
// When we move to Vercel + ivylabs.ai, set site to the real domain and remove `base`.
export default defineConfig({
  site: 'https://slcky.github.io',
  base: '/ivylabs-site',
  // Build into /docs so GitHub Pages can serve it from the main branch
  // with no extra permissions. (On Vercel later this is irrelevant.)
  outDir: './docs',
});
