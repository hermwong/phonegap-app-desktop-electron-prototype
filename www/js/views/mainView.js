var View = require('ampersand-view');
var Title = require('js/models/titleModel');

module.exports = View.extend({
    template: "<div><h1>PhoneGap Desktop!</h1><span data-hook='name'></span></div>",
    initialize: function() {

        this.initData();

        console.log(this.el);
        console.log(JSON.stringify(this.model.titleCollection.at(0)));

        this.render();
    },
    render: function() {
        this.renderWithTemplate();
    },
    initData: function() {
        var temp = new Title();
        temp.name = "string from a model!";
        this.model.titleCollection.add([temp]);
    },
    bindings: {
        'model.name' : [
            {
                type: 'text',
                hook: 'name'
            }
        ]
    }
});
