//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}
	getwidth(){
		return this._width;
	}
	getheight(){
		return this._height;
	}
	getArea(){
		return this.width*this.height
	}
	
}

class Square extends Rectangle {
	constructor(width,height,side){
		super(width,height);
		this._side = side;
	}
	getArea(){
		return this.side*this.side;
	}
	getPerimeter(){
		return 4*this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
