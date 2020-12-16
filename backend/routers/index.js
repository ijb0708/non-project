var express = require('express');
var router = express.Router();

var users = require('./users.js');

router.use('/users', users);

router.get('/', function(req, res) {
	res.send('succes');
})

module.exports = router;