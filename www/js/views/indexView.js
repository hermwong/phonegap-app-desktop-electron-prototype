// **This example illustrates the declaration and instantiation of a minimalist View.**
var pgdApp = pgdApp || {};

require('js/collections/helloWorldCollection.js');
require('js/models/helloWorldModel.js');

// Self-executing wrapper
(function($){
  // **ListView class**: Our main app view.
  var ListView = Backbone.View.extend({
    el: $('body'), // attaches `this.el` to an existing element.
    // `initialize()`: Automatically called upon instantiation. Where you make all types of bindings, _excluding_ UI events, such as clicks, etc.
    initialize: function(){
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

      pgdApp.helloWorldCollection.add(pgdApp.helloWorldModel);

       this.render(); // not all views are self-rendering. This one is.
    },
    // `render()`: Function in charge of rendering the entire view in `this.el`. Needs to be manually called by the user.
    render: function(){

        var length = 0;

        if (pgdApp.helloWorldCollection.length) {
            length = pgdApp.helloWorldCollection.length;

            for(var i=0;i<length;i++) {
                var tempObject = pgdApp.helloWorldCollection.at(i).attributes;

                $(this.el).append("<h1>" + tempObject.title + "</h1>");
                $(this.el).append("<span>" + tempObject.description + "</span><br/>");
            }
        }

        $(this.el).append("<span>" + length + " items in collection</span>");
    }
  });

  // **listView instance**: Instantiate main app view.
  var listView = new ListView();
})(jQuery);
