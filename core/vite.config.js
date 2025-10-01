import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [react()],

    // Base path for assets
    base: '/',

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: isProduction ? false : true, // keep false in prod for smaller bundles
      minify: isProduction ? 'esbuild' : false, // use esbuild (fast, default)
      cssMinify: isProduction,
      emptyOutDir: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
          },
          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(name || '')) {
              return 'assets/images/[name].[hash][extname]';
            }
            if (/\.(woff|woff2|eot|ttf|otf)$/i.test(name || '')) {
              return 'assets/fonts/[name].[hash][extname]';
            }
            if (/\.css$/i.test(name || '')) {
              return 'assets/css/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          },
        },
      },
    },

    // Local dev server (ignored in Docker/Cloud Run, but useful locally)
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      strictPort: true,
    },

    // Preview config (when running `vite preview`)
    preview: {
      host: '0.0.0.0',
      port: 8080,
      strictPort: true,
    },
  }
})
