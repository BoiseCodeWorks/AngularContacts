(function () {

	var app = angular.module('contactApp');

	app.component('contactDetail', {
		controller: ContactDetail,
		controllerAs: 'cd',
		templateUrl: 'contactDetail.html',
		bindings: {
		}
	});

	ContactDetail.$inject = ['$state', '$stateParams', '$firebaseObject'];

	function ContactDetail($state, $stateParams, $firebaseObject) {

		var cd = this;
		var contactId = $stateParams.id;

		cd.delete = function () {
			cd.contact.$remove();
			$state.go('dashboard', { category: cd.category });
		}

		cd.$onInit = function () {

			var ref = firebase.database().ref().child('contacts').child(contactId);

			cd.contact = $firebaseObject(ref);

			cd.contact.$loaded()
				.then(function (data) {
					cd.category = cd.contact.category;
					console.log(cd.category);
				})
				.catch(function (error) {
					console.error("Error:", error);
				});
		}
	}

})();