var React = require('react');

var ProductActions = require('../Actions/ProductActions');

var MenuTabsItem = React.createClass({
	changeTab() {
		ProductActions.receive(this.props.title);
	},

	render() {
		var className = "menu-tabs__item" + (this.props.isActive ? ' is-active': '');
		return (
			<li onClick={this.changeTab} className={className} id={this.props.id}>
				<a className="meunu-tabs__link">{this.props.title}</a>
			</li>
		)
	}
});

var MenuTabs = React.createClass({
	render() {
		var Tabs = this.props.tabs.map((tabProps) => {
			return <MenuTabsItem changeTab={this.changeTab} {...tabProps} key={tabProps.id} />
		});
		return (
			<div className="menu-tabs">
				<ul>
					{ Tabs }
				</ul>
			</div>
		)
	}
});

module.exports = MenuTabs;