import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [
      react(),
      // Visualize bundle size (only in production)
      isProduction && visualizer({
        open: false,
        filename: 'dist/bundle-analyzer-report.html',
        gzipSize: true,
        brotliSize: true,
      })
    ].filter(Boolean),

    // Base public path when served in production
    base: isProduction ? '/' : '/',

    // Build configuration
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: isProduction ? 'hidden-source-map' : 'inline-source-map',
      minify: isProduction ? 'terser' : 'esbuild',
      cssMinify: isProduction,
      emptyOutDir: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            vendor: ['lodash', 'axios'],
          },
          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.[jt]sx?$/.test(name || '')) {
              return 'assets/js/[name].[hash][extname]';
            }
            if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(name || '')) {
              return 'assets/images/[name].[hash][extname]';
            }
            if (/\.(woff|woff2|eot|ttf|otf)$/i.test(name || '')) {
              return 'assets/fonts/[name].[hash][extname]';
            }
            if (/\.css$/i.test(name || '')) {
              return 'assets/css/[name].[hash][extname]';
            }
            return 'assets/misc/[name].[hash][extname]';
          },
        },
      },
      // Terser options for better minification in production
      terserOptions: isProduction ? {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        format: {
          comments: false,
        },
      } : {},
    },

    // Development server configuration
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      strictPort: true,
      hmr: {
        overlay: true,
      },
    },

    // Preview configuration (used by 'vite preview' command)
    preview: {
      host: '0.0.0.0',
      port: 8080,
      strictPort: true,
    },
  }
})