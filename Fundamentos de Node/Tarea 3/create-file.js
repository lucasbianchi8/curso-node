const fs = require('fs');

const createFile = new Promise((resolve, reject) => {
    var row = '';

    for (let index = 1; index <= 10; index++) {
        row = row + `5 x ${ index } = ${ 5 * index } \n`;
    }

    fs.writeFile('taba-5.txt', row, function (err) {
        if (err) reject(new Error('Ocurrio un error en el guardado del archivo'));
        resolve('Se ha guardado el archivo exitosamente')
    });
});

module.exports = { createFile };