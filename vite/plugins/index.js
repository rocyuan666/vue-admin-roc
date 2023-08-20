import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import createComponents from './components'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'
import createVueJsx from './vue-jsx'
import createMockServer from './mockServer'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()]
  isBuild && vitePlugins.push(createAutoImport())
  isBuild && vitePlugins.push(createComponents())
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createVueJsx())
  !isBuild && vitePlugins.push(createMockServer())
  vitePlugins.push(createSvgIcon(isBuild))
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
