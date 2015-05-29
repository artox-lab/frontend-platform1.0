var React = require('react');

var ProductTopItem = React.createClass({
	render() {
		return (
			<li className="product-top__item">
				<div className="product-top__image"><a href="#"><img src={this.props.image} /></a></div>
				<span className="product-top__title">{this.props.title}</span>
			</li>
		)
	}
});

module.exports = ProductTopItem;