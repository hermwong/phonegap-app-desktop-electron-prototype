var _ = require('underscore');
var domready = require('domready');
var View = require('ampersand-view');

var AppView = View.extend({
    el: document.body,
    initialize: function(options) {
        this.titleCollection = options.titleCollection;
    },
    render: function() {
        $(this.el).append("<h1>hello world</h1");
        return this;
    }
});

domready(function() {
    window.view = new AppView({}).render();
});
