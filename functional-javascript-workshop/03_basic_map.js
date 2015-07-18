module.exports = doubleArray;

function doubleArray(numbersArray){
	return numbersArray.map(doubleNumber);
}

function doubleNumber(number){
	return number * 2;
}