var express = require('express');
var app = express();

var mongoose = require('mongoose');
var session = require('express-session');
var mysql = require('mysql');
var MySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');

var api = require('./routers/index.js');
var port = process.env.PORT || 2000;

var sqlstore = new MySQLStore({
	host: 'localhost',
	user: 'empty',
	password: 'empty123',
	port: 3307,
	database: 'empty_book',
	insecureAuth : true
});

app.use(
	session({
		secret: 'empty',
		resave: false,
		saveUninitialized: true,
		store:sqlstore
	})
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

app.listen(port, function() {
	console.log('running ' + port);
})