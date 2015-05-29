var React = require('react');

var MenuInnerItem = React.createClass({
	render() {
		return (
			<li className="menu-inner__item">
				<a className="menu-inner__link" href="#">{this.props.title}</a>
			</li>
		)
	}
});

module.exports = MenuInnerItem;