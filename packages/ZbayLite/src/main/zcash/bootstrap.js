import path from 'path'
import { exec, spawn } from 'child_process'

const ZCASH_RESOURCES = 'zcash'

const isDev = process.env.NODE_ENV === 'development'

export const getResourcesPath = (...paths) => {
  if (isDev) {
    // Development mode resources are located in project root.
    return path.join.apply(null, [process.cwd(), ...paths])
  }
  // In builds the resources directory is located in 'Contents/Resources'
  return path.join.apply(null, [process.resourcesPath, ...paths])
}

const getZcashResource = (name, platform) => getResourcesPath(
  ZCASH_RESOURCES,
  platform,
  name
)

export const ensureZcashParams = (platform, callback) => {
  const binaryPath = getZcashResource('zcash-fetch-params', platform)
  exec(binaryPath, callback)
}

export const spawnZcashNode = (platform, isTestnet) => {
  const zcashdPath = getZcashResource('zcashd', platform)
  const configName = isTestnet ? 'testnet.conf' : 'mainnet.conf'
  const options = [
    `-conf=${getResourcesPath(ZCASH_RESOURCES, configName)}`,
    '-debug=1'
  ]
  return spawn(zcashdPath, options)
}

export default {
  spawnZcashNode,
  ensureZcashParams
}
