var React = require('react');

var ProductTopList = require('./Product-Top-List');

var ProductList = require('./Product-List');

var ContentCenterColumn = React.createClass({
	render() {
		return (
			<div className="flex-item flex-item--center">
				<h1>{this.props.products.title} — <span className="color-black-50">найдено {this.props.products.defaults.length}</span></h1>

				<ProductTopList products={this.props.products.top} />

				<ProductList products={this.props.products.defaults} />
			</div>
		)
	}
});

module.exports = ContentCenterColumn;