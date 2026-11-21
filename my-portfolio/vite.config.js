import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDirectory, 'index.html'),
        about: resolve(rootDirectory, 'about/index.html'),
        contact: resolve(rootDirectory, 'contact/index.html'),
        journey: resolve(rootDirectory, 'journey/index.html'),
        projects: resolve(rootDirectory, 'projects/index.html'),
        skills: resolve(rootDirectory, 'skills/index.html')
      }
    }
  }
});
