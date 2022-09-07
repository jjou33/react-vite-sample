import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }): any => {
  const env = loadEnv(mode, process.cwd())
  return {
    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: false
    },
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
    },
    plugins: [react()]
  }
})
