import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use /golf/ in production so assets resolve correctly when served at /golf
  base: process.env.NODE_ENV === 'production' ? '/golf/' : '/',
})
