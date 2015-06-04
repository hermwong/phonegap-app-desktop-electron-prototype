var MainView = require('js/views/mainView');
var Me = require('js/models/me');


window.app = {
	init: function () {

		this.me = new Me();

		this.view = new MainView({
			el: document.body,
			model: this.me
		});

	}
};

window.app.init();
