module.exports = function checkUsersValid(goodUsers){
	
	return function compareUsers(submittedUsers){
		return submittedUsers.every(function (submittedUser){
			return goodUsers.some(function (goodUser){
				return goodUser.id === submittedUser.id;	
			})
		})
	}			
}
