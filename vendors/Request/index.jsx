var Request = function Request (service, url) {
	this.service = service;
	this.url = (this.service.url = url || this.service.url || location.href);
};

Request.create = function(service, url) {
	return new Request(service, url);
};

Request.prototype.addListener = Request.prototype.bind = Request.prototype.on = function() {
	this.service.on.apply(this.service, arguments);
};

Request.prototype.removeListener = Request.prototype.unbind = Request.prototype.off = function() {
	this.service.removeListener.apply(this.service, arguments);
};

Request.prototype.once = function() {
	this.service.once.apply(this.service, arguments);
};

Request.prototype.removeAllListeners = function(event) {
	this.service.removeAllListeners(event);
};

Request.prototype.setMaxListeners = function(n) {
	this.service.setMaxListeners(n);
};

Request.prototype.emit = Request.prototype.send = function() {
	return this.service.send.apply(this.service, arguments);
};

module.exports = Request;