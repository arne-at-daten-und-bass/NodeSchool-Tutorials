

function countWords(inputWords) {
      return inputWords.reduce(function(memo, current) {
      	memo[current] = ++memo[current] || 1  
      	return memo
      	}, {});
    };
    
module.exports = countWords