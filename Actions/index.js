var EE = require('events').EventEmitter;

var AppActions = Object.create(EE.prototype);

AppActions.setMaxListeners(0);

module.exports = AppActions;