module.exports = repeat;

function repeat(operation, num){
	if(num<=0){
		return:
	}
	else{
		for (var i = 0; i <= num; i++) {
			operation();
		};
	}

}