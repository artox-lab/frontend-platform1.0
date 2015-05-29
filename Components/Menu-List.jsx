var React = require('react');

var MenuListItem = require('./Menu-List-Item');

var MenuList = React.createClass({
	render() {
		var FilterItems = this.props.items.map((item) => {
			return <MenuListItem {...item} key={item.id} />
		});

		return (
			<div className="menu-list">
				<ul>
					{ FilterItems }
				</ul>
			</div>
		)
	}
});

module.exports = MenuList;