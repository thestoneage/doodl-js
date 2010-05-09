function Vector(a, b) {
	this.x = a;
	this.y = b;
}

Vector.prototype.add = function (other) {
	return new Vector(this.x + other.x, this.y + other.y);
}

Vector.prototype.sub = function (other) {
	return new Vector(this.x - other.x, this.y - other.y);	
}

Vector.prototype.mul = function(scalar) {
	return new Vector(this.x * scalar, this.y * scalar);
};

Vector.prototype.div = function(scalar) {
	return this.mul(1 / scalar);
};

Vector.prototype.len = function() {
	return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};

Vector.prototype.normalize = function() {
	return this.div(this.len());
};