var fs = require('fs');
var file = process.argv[2];
var callback = function (err, contents) {
        var lines = contents.toString().split('\n').length -1;
        console.log(lines);
};

fs.readFile(file, callback);
