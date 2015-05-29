
/*
* Singleton constructor
* @constructor
* */

 var SocketService = new function() {
	var instance = null;

	function SocketService(url) {
		this.url = url || '';

		if (!instance) {
			instance = this;
			this.connect();
		} else {
			return instance;
		}
	}

	return SocketService;
};

SocketService.prototype.connect = function() {
	this.socket = io.connect(this.url);
	console.log('socket connected');
};

SocketService.prototype.send = function(event, data) {
	return new Promise((resolve) => {
		var done = (serverData) => {
			this.socket.off(event, done);
			resolve(serverData);
		};

		this.socket.on(event, done);
		this.socket.emit(event, data);
	});
};

SocketService.prototype.on = function() {
	this.socket.on.apply(this.socket, arguments);
};

module.exports = SocketService;