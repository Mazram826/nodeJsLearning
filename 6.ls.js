// const fs = require('node:fs')

// console.log('callbacks: ');

// fs.readdir('.', (err, files) => {
//     if (err) {
//         console.error('Error al leer el directorio: ', err);
//         return;
//     }

//     files.forEach(file => {
//         console.log(file);
//     })
// })

console.log('Ahora con promesas: ');


const fs = require('node:fs/promises')

fs.readdir('.')
.then(files => {
    files.forEach(file =>{
    console.log(file);
    })
})
.catch(err => {
    if (err) {
        console.error('Error al leer el directorio: ', err);
        return;
    }
})