import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@ui-lib/ui-vue': resolve(__dirname, '../../packages/ui-vue/src/index.ts'),
      '@ui-lib/shared': resolve(__dirname, '../../packages/ui-shared/src/index.ts'),
    }
  },
  optimizeDeps: {
    exclude: ['@ui-lib/ui-vue', '@ui-lib/shared']
  }
}) 