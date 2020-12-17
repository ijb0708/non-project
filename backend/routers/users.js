var express = require('express');
var router = express.Router();

global.__base = __dirname + '/'

router.get('/', function(req, res) {
	res.send('succes');
});

router.get('/id', function(req, res) {
	req.session.auto=true;
	res.send('session succes');
});

module.exports = router;