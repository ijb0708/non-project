var express = require('express');
var router = express.Router();

var users = require('./users.js');
var game = require('./game.js');

router.use('/users', users);
router.use('/game', game);

router.get('/', function(req, res) {
	res.send('succes');
})

module.exports = router;