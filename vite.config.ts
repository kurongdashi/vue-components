import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      // 入口
      entry: fileURLToPath(new URL('./src/index.js', import.meta.url)),
      name: 'lib',
      fileName: 'lib'
    },
    rollupOptions: {
      // 不需要打包进库的依赖，忽略vue
      external: ['vue'],
      output: {
        // UMD构建模式下为这些外部的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
