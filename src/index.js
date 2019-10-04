console.log(`Node ${process.versions.node} on ${process.platform}.`);

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

console.log(`The parent process is pid ${process.ppid}`);

console.log(`Time ${process.uptime()} sec.`)

const memoryUsage = process.memoryUsage()
console.log(`Heap Total ${memoryUsage.heapTotal}`)

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