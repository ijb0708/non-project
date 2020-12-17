var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var config = require('./config');

var store = new MySQLStore({
	config.mysql
});

var res = session({
		secret: 'empty',
		resave: false,
		saveUninitialized: true,
		store:store
	});

module.exports = res;