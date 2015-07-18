var http = require('http');

http.get(process.argv[2], callback);

function callback(data){
	data.setEncoding('utf8');
	data.on('data', console.log);
	data.on('error', console.error);
}

