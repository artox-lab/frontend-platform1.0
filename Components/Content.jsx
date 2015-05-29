var React = require('react');

var ContentCenterColumn = require('./ContentCenterColumn');

var ContentRightColumn = require('./ContentRightColumn');

var Content = React.createClass({
	render() {
		return (
			<div className="container flex-container">
				<ContentCenterColumn {...this.props} />
				<ContentRightColumn />
			</div>
		)
	}
});

module.exports = Content;