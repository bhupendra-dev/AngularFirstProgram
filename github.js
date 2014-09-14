(function(){

	var github = function($http){

		var getUser = function(username){

			return $http.get("https://api.github.com/users/" + username)
						.then(function(response){
							return response.data;
						});
		};

		var getRepos = function(user){
			return $http.get(user.repos_url)
						.then(function(response) {
							return response.data;
						});
		};

		var getRepoDetails = function(username, reponame) {
			var repo;
			var repourl = "http://api.github.com/repos/" + username + "/" + reponame;

			return $http.get(repourl)
				.then(function(response) {
					repo = reponse.data;
					return $http.get(repourl + "/collaborators" );
				})
				.then(function(reponse){
					repo.collaborators = response.data;
					return repo;
				});
		};

		return {
			getUser: getUser,
			getRepos: getRepos,
			getRepoDetails: getRepoDetails
		};
	};
	var module = angular.module("gitHubViewer");
	module.factory("github",github);

}());