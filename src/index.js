import conf from './utils/config'
import { log, show } from './utils/logger'

// Tabby Cat Boilerplate
// This is your entry point! Start here your awesome project
// To make sum buck! (/•-•)/

// Show and log and info
log.info(`Boilerplate version ${conf.get('VERSION')}`)
// Throw and error for log and console
log.error(`A variable from your config.json: ${conf.get('YOUR_SECRET_STUFF')}`)
// Yet another console log. But more stylish
show.tabby('Hello a cat is here...')

process.on('SIGINT', () => {
  process.exit(1)
})

process.on('exit', code => {
  console.log(`About to exit with code: ${code}`)
})

process.on('uncaughtException', e => {
  console.log(e)
  process.exit(1)
})

process.on('unhandledRejection', e => {
  console.log(e)
  process.exit(1)
})
