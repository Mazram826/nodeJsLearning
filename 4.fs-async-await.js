//Esto sólo en los móduos nativos que no tienen promesas nativas
//const { promisify } = require('node:util')
//const readFilePromise = promisify(fs.readFile)

const { readFile } = require ('node:fs/promises');


//Esto es lo mismo que con la IIFE.
// async function init () {
//     console.log('Leyendo el primer archivo...');
//     const text = await readFile('./archivo.txt', 'utf8');
//     console.log('primer texto:', text)
//     console.log('-> Hacer cosas mientras lee el archivo...')

//     console.log('Leyendo el segundo archivo...');
//     const secondText = await readFile('./archivo2.txt', 'utf8');
//     console.log('segundo texto:', secondText)
// }

// init();

// IIFE - Inmediately Invoked Function Expression
(async () => {

    console.log('Leyendo el primer archivo...');
    const text = await readFile('./archivo.txt', 'utf8');
    console.log('primer texto:', text)
    console.log('-> Hacer cosas mientras lee el archivo...')

    console.log('Leyendo el segundo archivo...');
    const secondText = await readFile('./archivo2.txt', 'utf8');
    console.log('segundo texto:', secondText)
}
)()


