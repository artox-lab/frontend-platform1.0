var React = require('react');

var style = {
	border: '2px solid #999',
	'list-style': 'none',
	'margin': '0 0 10px',
	'padding': '10px'
};

var Item = React.createClass({
	render() {
		return (
			<li style={style}>
				<b>ID:</b>
				<span>{this.props.id}</span>
				<b>first_name</b>
				<span>{this.props.first_name}</span>
				<b>last_name</b>
				<span>{this.props.last_name}</span>
				<b>email</b>
				<span>{this.props.email}</span>
				<b>country</b>
				<span>{this.props.country}</span>
				<b>ip_address</b>
				<span>{this.props.ip_address}</span>
			</li>
		)
	}
});

module.exports = React.createClass({
	render() {
		var Items = this.props.items.map((prop) => {
			return <Item {...prop} key={prop.id} />
		});

		return (
			<div>
				<h1>React</h1>
				<ul>{ Items }</ul>
			</div>
		)
	}
});