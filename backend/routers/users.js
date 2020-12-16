var express = require('express');
var router = express.Router();

global.__base = __dirname + '/'

router.get('/', function(req, res) {
	res.send('succes');
});

module.exports = router;