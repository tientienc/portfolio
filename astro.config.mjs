// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Deployed to GitHub Pages at https://tientienc.github.io/portfolio/
export default defineConfig({
  site: 'https://tientienc.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
});
