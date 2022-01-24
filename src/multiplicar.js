//tabla de multiplicar del 5
const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        
        let salida = '';
        let  consola = '';

        for (let mul = 1; mul <= hasta; mul++) {
          salida += `${base} ${'X'} ${mul} ${'='} ${base * mul}\n`
          consola += `${colors.grey(base)} ${colors.red('X')} ${colors.gray(mul)} ${colors.bgBlue('=')} ${colors.green(base * mul)}\n`
        }


        if(listar){
            console.log('========================='.green);
            console.log(     'Tabla del:'.green, colors.blue(base));
            console.log('========================='.green);  

            console.log(consola);
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`
        
    } catch (error) {
        throw error
    }
    
};


module.exports = {
    crearArchivo 
}
