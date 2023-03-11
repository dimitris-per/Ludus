function Tables(x, y) {
	this.y = y;
	this.x = x;
	this.tableWidth = 1;
  
	this.show = function() {
	  noStroke();
	  fill(0, 0, 0, 0); // set alpha to 0
	  rect(this.x , this.y, this.tableWidth, height-1, 10);
	}
  }