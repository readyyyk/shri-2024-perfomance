import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteMinifyPlugin({})],
  base: "/shri-2024-perfomance",
  build: {
    cssMinify: "lightningcss",
    cssCodeSplit: true,
    minify: "terser",
  },
  css: {
    postcss: "./postcss.config.cjs"
  }
})
