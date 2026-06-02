// @ts-check
import { defineConfig } from 'astro/config';

// Two deploy targets:
//   • Vercel / ivylabs.ai (default) — serves at the domain root, builds to dist/
//   • GitHub Pages preview          — served under /ivylabs-site/, builds to docs/
// The Pages preview build sets DEPLOY_TARGET=pages (see `npm run build:pages`).
const PAGES = process.env.DEPLOY_TARGET === 'pages';

export default defineConfig({
  site: PAGES ? 'https://slcky.github.io' : 'https://ivylabs.ai',
  ...(PAGES ? { base: '/ivylabs-site', outDir: './docs' } : {}),
});
