import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    Sitemap({
      hostname: 'https://oscarmpala.co.zw',
      dynamicRoutes: [
        '/',
        '/projects',
        '/admin',
        // Beautiful, SEO-friendly routes
        '/project/tradeaxis',
        '/project/crest-commercial',
        '/project/harrison-vance',
        '/project/zenith',
        '/project/proflow'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});