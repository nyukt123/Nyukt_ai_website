import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    base: './', // This ensures assets are loaded correctly
    preview: {
      port: 8080,
      host: true, // Listen on all network interfaces
      strictPort: true,
    },
    server: {
      port: 8080,
      host: true,
      strictPort: true,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      emptyOutDir: true,
    },
  }
})
