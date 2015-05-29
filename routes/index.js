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

router.get('/', function(req, res, next) {
	var html = React.renderToString( App({items: props}) );

	res.render('index', {
		title: 'Express',
		main: html
	});

});

module.exports = router;
