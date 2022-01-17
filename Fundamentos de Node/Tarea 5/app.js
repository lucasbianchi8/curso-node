const process = require("process")
const file = require('./create-file');

file.createFile(Number(process.argv[2]))
	.then(resp => console.log(resp))
	.catch(error => console.error(error));