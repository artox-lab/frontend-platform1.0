var React = require('react');

var ProductItemDefault = require('./Product-Item-Default');
var ProductItemCustom = require('./Product-Item-Custom');
var Store = require('../Stores/ProductStore');

var ProductList = React.createClass({

	getInitialState() {
		return {
			products: this.props.products
		}
	},

	componentDidMount: function() {
		Store.addChangeListener(this._onChange);
	},

	_onChange() {
		this.setState({
			products: Store.get().defaults
		});
	},
	
	render() {
		var Products = this.state.products.map((product) => {
			if (product.viewType === "custom")
				return <ProductItemCustom key={product.id} {...product} />;

			return <ProductItemDefault key={product.id} {...product} />

		});

		return (
			<ul className="product__list">{ Products }</ul>
		)
	}
});

module.exports = ProductList;