var WebSocket = require('ws');

connection = function (server) {
	var wss = new WebSocket.Server({ server });
	var msg=null;

	var x=10, y=10;
	var game={
				'player_x':x,
				'player_y':y
			};

	wss.on('connection', function(ws) {
		
		console.log("con");

		ws.on('message', function(m) {
			msg = JSON.parse(m);
			console.log(msg.dir)
			if (msg.dir==1) {
				y--;
			}else if(msg.dir==2) {
				x++;
			}else if(msg.dir==3) {
				y++;
			}else if(msg.dir==4) {
				x--;
			}

			game = {
				'player_x':x,
				'player_y':y
			}

			console.log(x+" "+y);

			ws.send(JSON.stringify(game));
		});

		ws.on('close', function(e) {

		});
	});
};

    // wss.on('connection', (ws, req) => { // 웹 소켓 연결 시
    //     var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    //     ws.on('message', function(event) {
    //     	var msg =JSON.parse(event);
    //     	console.log('in : ' + ip + '{' + msg.event + '}');
    //     }) 
    // });

module.exports = connection;