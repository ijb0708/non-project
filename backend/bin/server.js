var app = require('../app');
var server = require('http').createServer(app);
var websocket = require('../connecter/WebSocket');

var config = require('../connecter/config.js').server;

var port = process.env.PORT || config.port;

server.listen(port, function () {
	console.log("running " + port);
});

websocket(server);
