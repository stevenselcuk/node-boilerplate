import conf from './utils/config'
import { log, show } from './utils/logger'

log.info(`Boilerplate version ${  conf.get('VERSION')}`)
log.info(`A variable from your config.json: ${conf.get('YOUR_SECRET_STUFF')}`)
show.tabby('Hello a cat is here...')

log.info('Some stufff' + conf.get('VERSION'))

console.log('Hi')
process.on('SIGINT', () => {
  process.exit(1)
})

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', e => {
  console.log(e)
  process.exit(1)
})

process.on('unhandledRejection', e => {
  console.log(e)
  process.exit(1)
})