import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ command }) => ({
  plugins: [react(), svgr()],
  // Nutzt '/resume/' für GitHub Pages Builds, lokal einfach '/'
  base: command === 'build' ? '/resume/' : '/',
  build: {
    outDir: 'build',
  },
}));
