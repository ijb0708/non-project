var express = require('express');
var app = express();

var mongoose = require('mongoose');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');

var api = require('./routes/index.js');
var session = require('./connecter/SessionStore');
var port = process.env.PORT || 2000;

global.__base = __dirname + '/';

// app.use(session);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

app.listen(port, function() {
	console.log('running ' + port);
})