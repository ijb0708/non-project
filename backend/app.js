var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var api = require('./routers/index.js');

var port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

app.listen(port, function() {
	console.log('running ' + port);
})