import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    testMatch: ['./**/*.test.tsx'],
    setupFiles: ['./tests/setup.ts'],
    globals: true
  }
})
