import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { fileURLToPath } from 'node:url'

export default function createSvgIcon(isBuild) {
  const iconDirs = path.resolve(fileURLToPath(new URL('./', import.meta.url)), '../../', 'src/assets/icons/svg')
  console.log(iconDirs)
  return createSvgIconsPlugin({
    iconDirs: [iconDirs],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild,
  })
}
