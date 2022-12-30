import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react()],
  site: 'https://r3web-server.ad-ins.com',
  // base: '/doc',
})