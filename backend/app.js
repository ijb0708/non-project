var express = require('express');
var app = express();

var mongoose = require('mongoose');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./connecter/config');

var api = require('./routes/index');
var session = require('./connecter/SessionStore');

global.__base = __dirname + '/';

// app.use(session);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

module.exports = app;