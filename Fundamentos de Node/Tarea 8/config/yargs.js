const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola',
    })
    .check((argv) => {
        try {
            const parsed = Number.parseInt(argv.b, 10);
            if (isNaN(parsed)) {
                throw new Error("Debe ingresar un nro");
            }
            if (parsed < 1 || parsed > 20) {
                throw new Error("Debes colocar un valor de base entre 1 y 20");
            }
        } catch (error) {
            console.log(error.message);
            return false;
        }
        console.log('Nro correcto');
        return true;
    })
    .argv;

module.exports = { argv };