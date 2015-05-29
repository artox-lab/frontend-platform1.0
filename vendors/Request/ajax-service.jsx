var Emitter = require('events').EventEmitter;

const STATUS_OK = 200;
const STATUS_REDIRECTION = 300;
const JSON_TYPE = 'application/json';

const isJson = (response) => {
	return response.headers.get('Content-Type').indexOf(JSON_TYPE) !== -1;
};

const isStatusOk = (response) => {
	return response.status >= STATUS_OK && response.status < STATUS_REDIRECTION;
};

const json = (response) => {
	return response.json();
};

const text = (response) => {
	return response.text();
};

const processData = (response) => {
	if (isStatusOk(response)) {
		if (isJson(response)) {
			return json(response);
		}
		return text(response);
	}

	throw new Error(response.statusText);
};

/*
* @constructor
* */

 var AjaxService = function AjaxService (url) {
	this.url = url || '';
};

AjaxService.prototype = Object.create(Emitter.prototype);

AjaxService.prototype.constructor = AjaxService;

AjaxService.prototype.send = function(event, data) {
	return fetch(this.url, data)
		.then(processData)
		.then((response) => {
			this.emit(event, response);
			return response;
		})
		.catch((err) => {
			this.emit('error', err);
			return err;
		});
};

module.exports = AjaxService;