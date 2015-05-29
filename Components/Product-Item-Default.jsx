var React = require('react');

var ProductItemDefault = React.createClass({
	render() {
		var icon = function(type) {
			return '<use xlink:href="#icon-' + type + '"></use>'
		}

		var Links = this.props.links.map((link) => {
			return <a key={link.id} href={link.href} className="btn">{link.title}</a>
		});

		var DataProps = this.props.data.map((dataProp) => {
			return (
				<li className="product__data-item" key={dataProp.id} >
					<svg className="icon" dangerouslySetInnerHTML={{ __html: icon(dataProp.icon) }}></svg>
					{dataProp.title}
				</li>
			)
		});

		return (
			<li className="product__item product__item--default">
				<div className="product__image"><img src={this.props.image} /></div>
				<div className="product__column">
					<div className="product__column-content">
						<span className="product__type color-black-50">{this.props.type}</span>
						<span className="product__name">{this.props.name}</span>
						<ul className="product__data">
							{ DataProps }
						</ul>
						<div className="product__links">
							{ Links }
						</div>
					</div>
					<div className="product__column-buttons">
						<div className="product__btn">
							<svg className="icon" dangerouslySetInnerHTML={{ __html: icon('earphone') }}></svg>
							<div className="product__btn-title">телефоны</div>
						</div>
						<div className="product__btn">
							<svg className="icon" dangerouslySetInnerHTML={{ __html: icon('shopping-cart') }}></svg>
							<div className="product__btn-title">Забронировать</div>
						</div>
					</div>
				</div>
			</li>
		)
	}
});

module.exports = ProductItemDefault;