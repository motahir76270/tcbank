import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 5173, // Your desired port number
    strictPort: true, // Exit if port is already in use
  }
})

//sudo lsof -t -i :5173 | xargs sudo kill -9


