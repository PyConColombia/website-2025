import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: import.meta.env.BRANCH === 'main' ? '/website-2025/' : '/website-develop/',
  build: {
    outDir: 'dist'
  }
});
