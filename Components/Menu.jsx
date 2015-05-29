var React = require('react');

var MenuList = require('./Menu-List');
var MenuTabs = require('./Menu-Tabs');

var Menu = React.createClass({
	render() {
		return (
			<div className="menu">
				<div className="container">
					<MenuTabs {...this.props} />
					<MenuList items={this.props.filters} />
				</div>
			</div>
		)
	}
});

module.exports = Menu;