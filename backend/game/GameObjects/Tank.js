var GameObject = require('./GameObject');

// 위 : 1 오른쪽 : 2 아래 : 3 왼쪽 : 4  공격 : 10
class Tank extends GameObject {

	constructor(x, y, width, height) {
		super(x, y, width, height);
		this.state=0; 
	}
}

module.exports = Tank
