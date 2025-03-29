import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslint(), react()],
  server: {
    port: 3000, // Modifica se necessario
  },
  build: {
    outDir: 'dist', // Output della build
  },
});
