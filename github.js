(function(){


	var github = function($http){

		var getUser = function(username){

			return $http.get("https://api.github.com/users/" + username)
						.then(function(response){
							return response.data;
						});
		};

		var getRepos = function(user){
			return $http.get(user)
		};

		return {

		};
	};
	var module = angular.module("gitHubViewer");

}());