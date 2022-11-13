import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/mangosteen/dist/',
   
  plugins: [
    vue(),
    vuejsx({
      transformOn:true,
      mergeProps:true
    })
  ]
})
