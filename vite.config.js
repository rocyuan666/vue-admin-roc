/*
 * @作者：rocyuan（袁鹏）
 * @邮箱：roc@rocyuan.top、rocyuan666@163.com
 * @微信：rocyuan666
 * @个人网站：http://rocyuan.top
 */
import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env
  return {
    base: VITE_APP_ENV === 'production' ? './' : './',
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src'),
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
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
      // https://cn.vitejs.dev/config/#server-proxy
      proxy: {
        '/api': {
          target: 'http://rocyuan.top:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    //fix:error:stdin>:7356:1: warning: "@charset" must be the first rule in the file
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
