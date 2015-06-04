var View = require('ampersand-view');
var Title = require('js/models/titleModel');

module.exports = View.extend({
    template: "<div><h1>PhoneGap Desktop!</h1><span data-hook='name'></span></div>",
    initialize: function() {
        this.render();

        this.initData();

        console.log(app.me.titleCollection);
    },
    render: function() {
        this.renderWithTemplate();
    },
    initData: function() {
        var temp = new Title();
        temp.name = "from a model!";

        app.me.titleCollection.add([temp]);
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
