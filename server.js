const PORT = 3327;

var http = require('http');
var app = require('./app');
var server = http.createServer(app);

server.listen(PORT, function() {
	console.log('server start');
});