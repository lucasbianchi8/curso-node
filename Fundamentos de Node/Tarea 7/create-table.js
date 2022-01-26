const fs = require('fs');

const createTable = (x) => new Promise((resolve, reject) => {
    var row = '';

    for (let index = 1; index <= 10; index++) {
        row = row + `${x} x ${ index } = ${ x * index } \n`;
    }
    
    resolve(row);
});

module.exports = { createTable };