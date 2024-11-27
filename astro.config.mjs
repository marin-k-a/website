import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://marin-k-a.com',
    base: '/',
    outDir: 'docs',
    vite: {
        build: {
          rollupOptions: {
            output: {
              assetFileNames: 'assets/[name][extname]',
              chunkFileNames: 'assets/[name].js',
              entryFileNames: 'assets/[name].js',
            },
          },
        },
    },
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
