var express = require('express');
var router = express.Router();
var React = require('react');

require('node-jsx').install({
	extension: '.jsx',
	harmony: true
});

/*
var AppFactory = React.createFactory(require('../Components/App'));

*/
var props = require('../data/smarty-data.json');
var App = React.createFactory(require('../Components/Main'));

var request = require('request');




router.get('/', function(req, res, next) {
	var html = React.renderToString( App({items: props}) );

	request('http://api2.a-kulitsky.ru/', function (error, response, body) {
		res.render('index', {
			title: 'Express',
			main: html
		});
	});



});

module.exports = router;
