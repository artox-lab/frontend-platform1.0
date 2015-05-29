var AppDispatcher = require('../Dispatcher');
var Constants = require('../Constants');
var Request = require('../vendors/Request');
var AjaxService = require('../vendors/Request/ajax-service');

var goodsReq = Request.create(new AjaxService('http://localhost:3000/goods/'));
var placesReq = Request.create(new AjaxService('http://localhost:3000/places/'));

var request = Request.create(new AjaxService('http://localhost:3000/places/'));

module.exports = {
	receive(type) {
		if (type === 'Товары') {
			goodsReq.send().then((products) => {
				AppDispatcher.handleViewAction({
					actionType: Constants.PRODUCTS_RECEIVE,
					products: []
				})
			});
		} else {
			placesReq.send().then((products) => {
				AppDispatcher.handleViewAction({
					actionType: Constants.PRODUCTS_RECEIVE,
					products: products
				})
			});
		}
	}
};