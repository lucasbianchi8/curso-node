const file = require('./create-file');

file.createFile
	.then(resp => console.log(resp))
	.catch(error => console.error(error));
