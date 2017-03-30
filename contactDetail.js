(function () {
	
	var app = angular.module('contactApp');

	app.component('contactDetail', {
		controller: ContactDetail,
		controllerAs: 'cd',
		templateUrl: 'contactDetail.html',
		bindings: {
			contact: '<',
			index: '<'
		},
		require: {
			parent: '^contactList'
		}
	});

	ContactDetail.$inject = ['$http', 'storageService'];

	function ContactDetail($http, storageService) {
		
		var cd = this;

		cd.delete = function () {
			cd.parent.deleteContact(cd.index);
		}

		cd.$onInit = function () {
			
		}
	}
	
})();