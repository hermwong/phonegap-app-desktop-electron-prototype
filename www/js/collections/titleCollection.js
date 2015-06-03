var Collection = require('ampersand-collection');
var Title = require('js/models/titleModel');

var TitleCollection = Collection.extend({model: Title});
var titleCollection = new TitleCollection({name: 'PhoneGap Desktop'});

module.exports = titleCollection;
