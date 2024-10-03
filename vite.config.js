import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "home-56r",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "home-56r",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})