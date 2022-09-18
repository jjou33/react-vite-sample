import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

//vitejs.dev/config/
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
    plugins: [
      react({
        // JSX 컴파일 시 기본 jsx-runtime 대신 Emotion의 jsx 함수를 사용하도록 설정
        // JSX에서 css prop을 사용하기 위함
        jsxImportSource: '@emotion/react',
        // 커스텀 바벨 설정: @emotion-babel-plugin 플러그인 추가
        babel: {}
      })
    ],
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    }
  }
})
