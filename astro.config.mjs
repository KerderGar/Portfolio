import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kerdergar.github.io',
  base: process.env.VERCEL ? '' : '/Portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
