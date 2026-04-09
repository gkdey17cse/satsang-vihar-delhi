import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Custom plugin to generate physical folders for GitHub Pages
const generateSPARoutes = () => ({
  name: 'generate-spa-routes',
  closeBundle() {
    // List all your major SEO routes here
    const routes = [
      'upyojna',
      'history',
      'conference-du-2026',
      'utsav-delhi-2026'
    ];

    const distPath = path.resolve(__dirname, 'dist');
    const indexPath = path.join(distPath, 'index.html');

    if (fs.existsSync(indexPath)) {
      routes.forEach(route => {
        const routePath = path.join(distPath, route);
        // Creates the physical directory (e.g., dist/utsav-delhi-2026)
        fs.mkdirSync(routePath, { recursive: true });
        // Copies index.html into that directory
        fs.copyFileSync(indexPath, path.join(routePath, 'index.html'));
      });
      console.log('✅ SEO route folders created for GitHub Pages');
    }
  }
})

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    generateSPARoutes(),
  ],
  base: "/",
})