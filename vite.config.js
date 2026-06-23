import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build work both when hosted AND opened from a local
// folder / attached to an email, with relative asset paths.
export default defineConfig({
  base: './',
  plugins: [react()],
})
