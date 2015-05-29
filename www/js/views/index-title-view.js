'use strict';

var View = require('ampersand-view');

module.exports = View.extend({
    template: "<h1><span id='title' data-hook='title'></span>!</h1>",
    events: {},
    bindings: {
        "model.name": {
            type: 'text',
            hook: 'title'
        }
    }
});
