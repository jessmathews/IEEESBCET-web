import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/IEEESBCET-web/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('chart.js')) return 'vendor-charts';
            if (id.includes('lodash')) return 'vendor-utils';
            return 'vendor'; // fallback for other deps
          }
        },
      },
    },
  },
})
