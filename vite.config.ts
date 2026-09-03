import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/offer_calculator/' : './',
  build: {
    outDir: isGitHubPages ? 'build' : 'dist',
  },
})
