import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash][extname]',
      },
    },
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
      },
    },
  },
})
