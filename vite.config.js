import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 🔥 WICHTIG für GitHub Pages
  base: "/Dao-Yu-101-kebei/",
})
