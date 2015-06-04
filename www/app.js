var MainView = require('js/views/mainView');
var Me = require('js/models/me');


window.app = {
	init: function () {
		// Model representing state for
		// user using the app. Calling it
		// 'me' is a bit of convention but
		// it's basically 'app state'.
		this.me = new Me();
		// Our main view
		this.view = new MainView({
			el: document.body,
			model: this.me
		});
		// Create and fire up the router
		//this.router = new Router();
		//this.router.history.start();
	}
};

window.app.init();
