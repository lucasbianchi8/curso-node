
const table = require('./create-table');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
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

if (argv.l) {
    table.createTable(Number(argv.b))
	.then(resp => console.log(resp))
	.catch(error => console.error(error));
}