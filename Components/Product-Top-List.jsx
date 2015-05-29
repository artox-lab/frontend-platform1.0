var React = require('react');

var ProductTopItem = require('./Product-Top-Item');

var Store = require('../Stores/ProductStore');

var ProductTopList = React.createClass({

	getInitialState() {
		return {
			products: this.props.products
		}
	},

	componentDidMount() {
		Store.addChangeListener(this._onChange);
	},

	_onChange() {
		this.setState({
			products: Store.get().top
		})
	},

	render() {
		var Products = this.state.products.map((product) => {
			return <ProductTopItem {...product} key={product.id} />
		});

		return (
			<ul className="product-top__list flex-container">{ Products }</ul>
		)
	}
});

module.exports = ProductTopList;