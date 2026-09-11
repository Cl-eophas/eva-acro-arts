import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages supplies the repository name at build time. Keep `/` as the
  // default for local hosting and custom domains.
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: true,
  },
})
