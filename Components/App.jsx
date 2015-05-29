var React = require('react');

var Menu = require('./Menu');

var Content = require('./Content');

var AppActions = require('../Actions');

var _ = require('lodash');

var activeTab = (props) => {
	return props.map((prop) => {
		prop.isActive = !prop.isActive;
		return prop;
	})
};

var App = React.createClass({
	getInitialState() {
		return this.props;
	},

	componentDidMount() {
		AppActions.on('change-tab', () => {
			document.body.classList.add('is-loading');
		});
		AppActions.on('change-tab:success', (data) => {
			console.time('r');
			document.body.classList.remove('is-loading');
			this.setState({
				products: data,
				tabs: activeTab(this.state.tabs)
			});
			console.timeEnd('r');
		});

		AppActions.on('filter:new', () => {
			var defaults = this.state.products.defaults.filter((product) => {
				return product.isNew;
			});

			var products = _.extend(this.state.products, {
				defaults: defaults
			});

			this.setState({
				products: products
			})
		});

	},

	render() {
		return (
			<div className="main">
				<div className="layout">
					<Menu {...this.state} />
					<Content {...this.state} />
				</div>
			</div>
		)
	}
});

module.exports = App;