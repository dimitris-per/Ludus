function Packages(x , y){
	

	this.random = random(0 , 20);
	console.log(this.random);
	this.x = x;
	this.y = y;
	
	this.width = 25;
	this.height = 25;

	if( int(this.random) == 1){  // Package Freeze


		fill(40, 184, 184);
		rect(this.x , this.y , this.width , this.height , 4);
		textSize(20);
		fill('white');
		text("F" , this.x + this.width/3.5 ,  this.y + this.height/1.3);
	}

}