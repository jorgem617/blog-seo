import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog-seo.netlify.app',
  integrations: [sitemap()],
});
