require('colors')
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'.green
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en consola'.green
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Este es el numero asta donde quieres la tabla'.green

  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero".green;
    }
    return true;
  }).argv;

  module.exports = argv;