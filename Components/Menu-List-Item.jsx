var React = require('react');

var MenuInnerList = require('./Menu-Inner-List');

var AppActions = require('../Actions');

var MenuListItem = React.createClass({

	handleFilterNewProduct(e) {
		e.preventDefault();
		AppActions.emit('filter:new');
	},

	render() {
		var icon = function(type) {
			return '<use xlink:href="#icon-' + type + '"></use>'
		}

		var className = 'icon icon-' + this.props.icon;

		return (
			<li className="menu-list__item" onClick={this.props.handler ? this[this.props.handler]: null}>
				 {this.props.icon ?
					 <svg className={className} dangerouslySetInnerHTML={{ __html: icon(this.props.icon) }} />
					 : null}
				<a href="#" className="menu-tabs__link">{this.props.title}</a>
				<MenuInnerList items={this.props.items} />
			</li>
		)
	}
});

module.exports = MenuListItem;