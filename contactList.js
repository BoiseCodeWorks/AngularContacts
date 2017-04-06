(function () {

	var app = angular.module('contactApp');

	app.component('contactList', {
		controller: ContactList,
		controllerAs: 'cl',
		templateUrl: 'contactList.html'
	});

	ContactList.$inject = ['$firebaseArray', '$stateParams'];

	function ContactList($firebaseArray, $stateParams) {

		var cl = this;

		cl.newContact = {
			firstName: '',
			lastName: '',
			phone: ''
		};

		cl.$onInit = function () {

			cl.category = $stateParams.category || 'Family';
			
			var ref = null;
				
			if (cl.category === 'All') {
				ref = firebase.database().ref().child('contacts');
			}
			else {
				ref = firebase.database().ref().child('contacts')
					.orderByChild('category')
					.equalTo(cl.category);
			}
			
			cl.contacts = $firebaseArray(ref);

			console.log($stateParams);
		}

		cl.addContact = function () {

			if (cl.newContact.firstName) {

				cl.newContact.category = cl.category;
				
				cl.contacts.$add(angular.copy(cl.newContact));

				cl.newContact.firstName = '';
				cl.newContact.lastName = '';
				cl.newContact.phone = '';
			}
		}

		cl.deleteContact = function (index) {

			var contact = cl.contacts[index];

			cl.contacts.$remove(contact);
		}
	}

})();