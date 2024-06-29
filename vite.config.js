import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      'react-router-dom' // Ensure react-router-dom is included in optimizeDeps
    ],
  },
  plugins: [react()],
})
