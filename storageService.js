(function () {
	
	var app = angular.module('contactApp');

	app.factory('storageService', StorageService);

	StorageService.$inject = [];

	function StorageService() {

		function saveData(data) {
			localStorage.setItem('contactApp', JSON.stringify(data));
		}	
		
		function getData() {
			return JSON.parse(localStorage.getItem('contactApp') || '[]');
		}

		return {
			saveData: saveData,
			getData: getData
		};
	}
})();