import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    watch: {
      usePolling: true, // ✅ fixes HMR on Windows
      interval: 300
    }
  }
})