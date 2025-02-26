// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import service from './src/lib/strapiImageService';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react()],
  // image: {
  //   service: {
  //     entrypoint: './src/lib/strapiImageService.ts',
  //     config: {
  //       maxWidth: 1920, // Set your max width
  //     },
  //   },
  // },
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: node({
    mode: 'standalone',
  }),
});