import _ from 'lodash'
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

const numbers = [1, 5, 8, 10, 1, 5, 15, 42, 5, 542, 812798, 28]

const uniqNumbers = _.uniq(numbers)
show.tabby(uniqNumbers)

const tailNumbers = _.tail(numbers)
show.tabby(tailNumbers)

const getRandomNumber = () => {
  return Math.round(Math.random() * 100)
}

const randomNumbers = _.times(8, getRandomNumber)

show.tabby(randomNumbers)

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
