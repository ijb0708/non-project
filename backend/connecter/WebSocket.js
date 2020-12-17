var wsServer = require('ws').Server;

var wss = new wsServer({port:2001});

wss.on('connection', function(ws) {
	ws.on('message', function(msg) {
		var jmsg = JSON.parse(msg);
		console.log(jmsg.event);
	})
})