import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';
// import process from 'process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: process.env.BRANCH === 'main' ? '/website-2025/' : '/website-develop/',
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/node_modules/*': path.resolve(__dirname, 'node_modules')
    }
  }
});
