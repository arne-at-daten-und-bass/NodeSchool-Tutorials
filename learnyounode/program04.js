var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

var callback = function (err, list){
	list.forEach(filter)	
};

var filter = function (file){
	if(path.extname(file) === '.' + ext){
	console.log(file)
	};
};

fs.readdir(dir, callback);
