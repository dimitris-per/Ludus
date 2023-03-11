function Tables(x, y) {

	this.y = y;
	this.x = x;
	this.tableWidth = 15;

	this.show = function() {
		fill(31, 40, 51);
		rect(this.x , this.y, this.tableWidth, height-1, 10);
	}
}