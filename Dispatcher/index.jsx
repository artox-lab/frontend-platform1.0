var Dispatcher = require('flux').Dispatcher;

var _ = require('lodash');

var AppDispatcher = new Dispatcher();

AppDispatcher.prototype = _.assign(Dispatcher.prototype, {
	handleViewAction(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});

module.exports = AppDispatcher;