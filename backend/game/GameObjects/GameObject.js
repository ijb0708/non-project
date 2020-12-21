class GameObject {
	
	constructor(x, y, width, height) {
		this.CurX=0;
		this.CurY=0;
		this.widthSize=width;
		this.heightSize=height;
	}
}	

GameObject.prototype={
	update:function () {

	},
	draw:function () {

	}
}

module.exports = GameObject;