module.exports = function getShortMessages(messagesArray){
	var newArray = messagesArray.filter(returnShortMessages)
	return newArray.map(returnMessage);
}


function returnShortMessages(item){
	return item.message.length < 50;
}

function returnMessage(item){
	return item.message;
}

