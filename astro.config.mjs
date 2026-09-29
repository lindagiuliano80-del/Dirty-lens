// @ts-check
import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are set by the deploy workflow (e.g. GitHub Pages serves the site
// under "/Dirty-lens/"). Locally, and on hosts that serve from the domain root, both
// are unset and the site lives at "/".
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_PATH || '/',
});
