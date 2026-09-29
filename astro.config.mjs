// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from the domain root (Vercel). SITE and BASE_PATH are optional
// overrides for a host that serves it under a sub-path; unset, the site lives at "/".
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_PATH || '/',
});
