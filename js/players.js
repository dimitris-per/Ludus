function Players(x , y){
	
	this.x = x;
	this.y = y;

	this.yspeed = 10;
	
	this.ylength = 90;
	this.playerWidth = 20;


	this.show = function(){
		
		fill(102, 252, 241);
		rect(this.x , this.y, this.playerWidth , this.ylength , 4);
	}

	this.update = function keyPressed(player){

		if(escape_pressed){
			return false;
		}

		if(player == 2){   // right player

			if(keyIsDown(UP_ARROW)){

				if(this.y > 4)
					this.y -= this.yspeed;
			}

			if(keyIsDown(DOWN_ARROW)){

				if(this.y < height - 95)	
					this.y += this.yspeed;
			}

		}
		else if(player == 1){   // left player

			if(keyIsDown(87)){

				if(this.y > 4)	
					this.y -= this.yspeed;
			}

			if(keyIsDown(83)){

				if(this.y < height - 95)
					this.y += this.yspeed;
			}
		}
		else if (player == 3){    // A.I


			if(this.y > ball.y && this.y > 30){

				this.y -= ball.yspeed;
			}
			else if (this.y <= ball.y && this.y < height){

				this.y += ball.yspeed;
			}
		}
		else if (player == 4){

			this.y = mouseY - this.ylength/2;



		}
		
	}

	this.resetPlayer = function() {
        this.x = x;
        this.y = y;
    }
}