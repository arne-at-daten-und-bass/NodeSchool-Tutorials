var fs = require('fs')
var path = require('path')

module.exports = function (directoryName, fileExtension, callback){
        
	fs.readdir(directoryName, function(err, fileList){
		if(err){
			return callback(err);
		}
		else{
			fileList = fileList.filter(function (file){
				return path.extname(file) === '.' + fileExtension
			});
		callback(null, fileList);

		};
	});
};
