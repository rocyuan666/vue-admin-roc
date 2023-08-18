import { viteMockServe } from 'vite-plugin-mock'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

export default function createMockServer() {
  return viteMockServe({ mockPath: path.join(fileURLToPath(new URL('./', import.meta.url)), '../../', 'mock') })
}
