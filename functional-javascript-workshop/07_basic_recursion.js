function reduce(array, myFunction, initialValues) {
	return (function reduceOne(index, value) {
		if (index > array.length - 1) return value
		return reduceOne(index + 1, myFunction(value, array[index], index, array))
	})(0, initialValues)
};

module.exports = reduce;