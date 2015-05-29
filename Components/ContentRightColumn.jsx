var React = require('react');

var ContentRightColumn = React.createClass({
	render() {
		var props = {
			width: 600,
			height: 400,
			marginTop: '-16'
		}
		return (
			<div className="flex-item flex-item--right">
				<div id="map" style={props}></div>
			</div>
		)
	}
});

module.exports = ContentRightColumn;