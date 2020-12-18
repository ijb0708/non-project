var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var config = require('./config').mysql;

var store = new MySQLStore(config);

var res = session({
		secret: 'empty',
		resave: false,
		saveUninitialized: true,
		store:store
	});

module.exports = res;