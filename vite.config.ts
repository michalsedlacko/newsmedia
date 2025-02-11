import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.vue', '.ts', '.js']
  },
  build: {
    minify: true,
    chunkSizeWarningLimit: 1600
  },
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    }
  }
})
