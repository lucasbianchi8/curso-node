const fs = require('fs');

var row = '';

for (let index = 1; index <= 10; index++) {
    row = row + `5 x ${ index } = ${ 5 * index } \n`;
}

fs.writeFile('taba-5.txt', row, function (err) {
    if (err) throw err;
});