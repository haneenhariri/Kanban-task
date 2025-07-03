import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/Kanban-task/',
  plugins: [react(),
   tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
