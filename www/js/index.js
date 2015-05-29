'use strict';

var Me = require('./js/models/test-model');
var MainView = require('./js/views/index-title-view');

window.app = {
    init: function() {
        this.me = new Me();

        this.me.name = 'PhoneGap Desktop';
        this.me.description = 'Electron & AmpersandJS Prototype';

        console.log(this.me.name + " - " + this.me.description);

        this.view = new MainView({
            el: document.getElementById('titleSection'),
            model: this.me
        });
    },
};

window.app.init();
