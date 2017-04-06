(function () {

	var app = angular.module('contactApp');

	app.factory('guidService', GuidService);

	GuidService.$inject = ['$q', '$http'];

	function GuidService($q, $http) {

		// function getId() {

		// 	return $http({
		// 		url: 'https://helloacm.com/api/guid-generator/',
		// 		method: 'GET',
		// 		transformResponse: function (value) {
		// 			return JSON.parse(value).guid[0];
		// 		}
		// 	});
		// }

		function getId() {

			return $q(function (resolve, reject) {

				$http({
					url: 'https://helloacm.com/api/guid-generator/',
					method: 'GET',
					transformResponse: function (value) {
						return JSON.parse(value).guid[0];
					}
				})
					.then(function (response) {
						//console.log(response);
						resolve(response.data);
					})
					.catch(function (error) {
						//console.log(error);
						reject(error);
					});
			});
		}

		return {
			getId: getId
		};
	}
})();