'use strict';
var React = require('react');

module.exports = React.createClass({
	
	incrementCount: function () {
		this.setState({
			count: this.state.count + 1
		});
	},

	getInitialState: function () {
		return {
			count: 5
		}
	},

	render: function () {
		return (
			<h1 onClick={this.incrementCount}>OMG hello {this.state.count}</h1>
		)
	}
});