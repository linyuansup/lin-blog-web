import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: true,
    proxy: {
      '/api': {
        target: "http://localhost:8000/",
        secure: false,
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
    }
  }
})
