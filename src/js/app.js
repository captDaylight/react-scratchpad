'use strict';
var React = require('react');
var MyComponent = require('./MyComponent');
window.React = React; // for react dev tools

React.render(
	<MyComponent/>,
	document.getElementById('mount-point')
);