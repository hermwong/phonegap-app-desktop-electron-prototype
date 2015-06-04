var State = require('ampersand-state');
var TitleCollection = require('js/collections/titleCollection');

module.exports = State.extend({
    collections: {
        titleCollection: TitleCollection
    }
});
