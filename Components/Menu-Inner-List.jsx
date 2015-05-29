var React = require('react');

var MenuInnerItem = require('./Menu-Inner-Item');

var MenuInnerList = React.createClass({
	render() {

		var Items = this.props.items.map((item) => {
			return <MenuInnerItem {...item} key={item.id} />
		});

		return (
			<ul className="menu-inner">{ Items }</ul>
		)
	}
});

module.exports = MenuInnerList;