var View = require('ampersand-view');
var Title = require('js/models/titleModel');

module.exports = View.extend({
    initialize: function() {

        this.initData();
        this.render();
    },
    render: function() {
        this.el.innerHTML += "<h1>PhoneGap Desktop!</h1>";

        var content = "";
        for(var i=0;i<this.model.titleCollection.length;i++) {
            content += "<span>" + this.model.titleCollection.at(i).name + "</span><br/>";
        }

        this.el.innerHTML += content;

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
