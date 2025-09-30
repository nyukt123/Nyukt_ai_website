import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Test git master
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 8080,
  },
})
