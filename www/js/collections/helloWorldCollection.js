require('js/models/helloWorldModel.js');

(function($) {

    var HelloWorldCollection = Backbone.Collection.extend({
        model: pgdApp.helloWorldModel
    });

    pgdApp.helloWorldCollection = new HelloWorldCollection();

})(jQuery);
