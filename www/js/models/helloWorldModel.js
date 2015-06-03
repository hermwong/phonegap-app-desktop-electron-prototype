(function($) {

    var HelloWorldModel = Backbone.Model.extend({
        defaults: {
            title: 'PhoneGap Desktop',
            description: 'Backbone.js hello world example in Electron'
        }
    });

    pgdApp.helloWorldModel = new HelloWorldModel();

})(jQuery);
