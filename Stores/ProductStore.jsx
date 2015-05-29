var AppDispatcher = require('../Dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../Constants');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var Store = _.assign(EventEmitter.prototype, {
	data: [],

	get() {
		return this.data;
	},

	emitChange() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	dispatcherIndex: AppDispatcher.register((payload) => {
		var action = payload.action;
		var data = payload.action.products;
		switch(action.actionType) {
			case Constants.PRODUCTS_RECEIVE:
				Store.data = data;
				Store.emitChange();
				break;
		}

		return true;
	})

});

module.exports = Store;