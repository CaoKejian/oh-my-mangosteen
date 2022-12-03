import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base:'/oh-my-mangosteen/dist/',
  plugins: [
    vue(),
    viteCompression(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    }),
    svgstore(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ]
})
