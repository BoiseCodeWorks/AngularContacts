(function () {
	
	var app = angular.module('contactApp');

	app.component('contactList', {
		controller: ContactList,
		controllerAs: 'cl',
		templateUrl: 'contactList.html'
	});

	ContactList.$inject = ['storageService'];

	function ContactList(storageService) {
		
		var cl = this;

		cl.contacts = [];
		cl.newContact = {
			firstName: '',
			lastName: '',
			phone: ''
		};

		cl.$onInit = function () {
			cl.contacts = storageService.getData();	
		}

		cl.addContact = function () {
			
			if (cl.newContact.firstName) {

				cl.contacts.push(angular.copy(cl.newContact));

				cl.newContact.firstName = '';
				cl.newContact.lastName = '';
				cl.newContact.phone = '';

				storageService.saveData(cl.contacts);
			}
		}

		cl.deleteContact = function (index) {
			
			cl.contacts.splice(index, 1);
			storageService.saveData(cl.contacts);
		}
	}
	
})();