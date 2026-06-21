import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const basePath = process.env.VERCEL ? '' : '/Portfolio';

export default defineConfig({
  site: 'https://kerdergar.github.io',
  base: basePath,
  vite: {
    plugins: [tailwindcss()],
    define: {
      __BASE_PATH__: JSON.stringify(basePath),
    },
  },
});
