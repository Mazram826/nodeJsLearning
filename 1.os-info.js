const os = require('node:os');

console.log('Información del SO: ')
console.log('--------------------')
console.log('Name:\t\t',  os.platform())
console.log('Version:\t', os.release())
console.log('Arquitectura:\t', os.arch())
console.log('CPUs:', os.cpus())
console.log('Memorial libre: ', os.freemem() / 1024 / 1024)
console.log('Memorial total: ', os.totalmem() / 1024 / 1024)
console.log('Uptime: ', os.uptime() / 60 / 60)
console.log('--------------------')