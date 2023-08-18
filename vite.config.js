/*
 * @作者：rocyuan（袁鹏）
 * @邮箱：roc@rocyuan.top、rocyuan666@163.com
 * @微信：rocyuan666
 * @个人网站：http://rocyuan.top
 */

import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import createVitePlugins from './vite/plugins'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, fileURLToPath(new URL('./', import.meta.url)))
  const { VITE_APP_ENV } = env
  return {
    base: VITE_APP_ENV === 'production' ? './' : './',
    resolve: {
      alias: {
        // 设置路径
        '~': fileURLToPath(new URL('./', import.meta.url)),
        // 设置别名
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    server: {
      port: 80,
      host: true,
      open: true,
      proxy: {
        '/api': {
          target: 'http://rocyuan.top:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
    plugins: createVitePlugins(env, command === 'build'),
  }
})
