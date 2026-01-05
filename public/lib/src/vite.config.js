import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  build: {
    lib: {
      entry: './index.js',
      formats: ['es'],
      fileName: 'index',
      name: 'MySpreadsheet'
    },
    target: 'esnext',
    assetsInlineLimit: Infinity, 
    cssCodeSplit: false,
    outDir: "../dist",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      }
    }
  },
  plugins: [viteSingleFile()]
})
