/*
var React = require('react');
var Locations = require('js/components/Locations.jsx');

React.render(
    <span>Hello PhoneGap</span>,
    //document.getElementById('ReactApp')
    document.body
);
*/

var React = require('react');

var Main = React.createClass({
	render: function() {
		return (
            <div className="main">
                Hello, this is main
            </div>
        );
	}
});

React.render(
    <Main/>,
    document.getElementById('ReactApp')
);
