import * as conf from 'nconf'
// We gonna get boilerplate version from package.json for demo purpose only
// You may want to remove it. ¯\_(ツ)_/¯
import { version } from '../../package.json'

conf
  .argv()
  .env()
  .file({
    file: './config.json'
  })

// Some shorthands to easy env awareness
// Remove this too if you remove "version"
conf.set('VERSION', version)

/**
 * Create an instance of nConf
 *
 * @type {Instance}
 *
 * @see for details https://github.com/indexzero/nconf#readme
 */
export default conf
