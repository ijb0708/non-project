var WebSocket = require('ws');

var users = [];

connection = function(server){

	var wss = new WebSocket.Server({ server });
	var num =0;
	wss.on('connection', function(socket, req) {

		// console.log('name : ' + msg);
		socket.on('message', function(msg) {
			var s =JSON.parse(msg);
			console.log(s.name + " : " + s.content);

			wss.clients.forEach(function each(client) {
      			if (client.readyState === WebSocket.OPEN) {
        			client.send(msg);
      			}
    		});
		});
	})
}

module.exports = connection;