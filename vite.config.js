import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslint(), react()],
  assetsInclude: ['**/*.pdf', '**/*.png', '**/*.jpg', '**/*.jpeg'],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  },
});
