var filterFunction = require('./moduleForProgram05.js');
var directoryName = process.argv[2];
var extensionName = process.argv[3];

filterFunction (directoryName, extensionName, function (err, list){
	if(err){
		return console.error('There was an error: ', err);
	}
	else{
		list.forEach(function(file){
			console.log(file);
		})
	}
})
