import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.jsx'),
      name: '@micjanic/circle-sliders',
      fileName: (format) => `my-component.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@pixi/react', 'pixi.js'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [react()],
});
