const {crearArchivo} = require('./src/multiplicar')
const argv = require('./config/yargs')
require('colors')

console.clear();



//const [ , , arg3 = 'base=5'] = process.argv;
//const [ , base = 5 ] = arg3.split('=');

//console.log( argv );





//let base 

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'created'.yellow))
    .catch(err => console.log(err))
