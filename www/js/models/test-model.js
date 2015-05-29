'use strict';

var State = require('ampersand-state');

module.exports = State.extend({
    props: {
        name: 'string',
        description: 'string'
    }
});
