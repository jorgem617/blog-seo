import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jorgecms.netlify.app',
  integrations: [
    sitemap({
      filter: (page) => true,
    }),
  ],
});
