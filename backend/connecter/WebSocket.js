var WebSocket = require('ws');

connection = function (server) {
	var wss = new WebSocket.Server({ server });
	var msg=null;

	var x=10, y=10;

	wss.on('connection', function(e) {
		msg = JSON.parse(e);
		console.log(e.test);
	});

	wss.on('message', function(e) {
		msg = JSON.parse(e);
		if (msg.action==1) {
			y--;
		}else if(msg.action==2) {
			x++;
		}else if(msg.action==3) {
			y++;
		}else if(msg.action==4) {
			x--;
		}

		game ={
			player_x:x,
			player_y:y
		}

		wss.send(JSON.stringify(sendData))
	});

	wss.on('close', function(e) {

	});
}

    // wss.on('connection', (ws, req) => { // 웹 소켓 연결 시
    //     var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    //     ws.on('message', function(event) {
    //     	var msg =JSON.parse(event);
    //     	console.log('in : ' + ip + '{' + msg.event + '}');
    //     }) 
    // });

module.exports = connection;