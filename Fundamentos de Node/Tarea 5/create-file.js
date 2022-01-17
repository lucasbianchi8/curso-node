const fs = require('fs');
const colors = require('colors');

const createFile = (x) => new Promise((resolve, reject) => {
    var row = '';

    for (let index = 1; index <= 10; index++) {
        row = row + `${x} x ${ index } = ${ x * index } \n`;
    }

    console.log('Estoy por generar el archivo'.america);

    fs.writeFile(`taba-${x}.txt`, row, function (err) {
        if (err) reject(new Error('Ocurrio un error en el guardado del archivo'));
        resolve('Se ha guardado el archivo exitosamente')
    });
});

module.exports = { createFile };