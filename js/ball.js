function Ball() {
	
	this.x = width/2;
	this.y = height/2;

	this.diameter = 32;

	this.xspeed = 8; 
	this.yspeed = 7;

	this.show = function() {

		fill(255, 255, 255);
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}

	this.update = function() {
		this.x += this.xspeed;
		this.y += this.yspeed;
		this.bounce();
	}

	this.bounce = function() {

		// player1 score 
		if (this.x >= width - 16) {
			this.xspeed = 6; 
			this.yspeed = 7 * random([-1, 1]);
			player1.resetPlayer();
			player2.resetPlayer();	
			leftScore += 1;
			this.x = width/2;
			this.y = height/2;
			this.xspeed *= 2;
		}

		// player2 score
		if (this.x <= 16) {
			this.xspeed = 6; 
			this.yspeed = 7 * random([-1, 1]);
			player1.resetPlayer();
			player2.resetPlayer();		
			rightScore += 1;
			this.x = width/2;
			this.y = height/2;
			this.xspeed *= 2;
		}

		if (this.y >= height - 16  || this.y <= 16) {
			this.yspeed *= -1;
		}

		// player 1
		if (this.x <= player1.x + this.diameter/2 + player1.playerWidth && 
			this.y <= player1.y + player1.ylength && 
			this.y >= player1.y) {
			this.xspeed *= -1;
		}


		//player 2
		if (this.x >= player2.x - this.diameter/2  && 
			this.y <= player2.y + player2.ylength && 
			this.y >= player2.y) {
			this.xspeed *= -1;
		}
	}
	// tail effect
	this.tailLength = 10;
    this.tailPositions = [];

    this.show = function() {
        // Draw the tail
		 noStroke();
        for (var i = 0; i < this.tailPositions.length; i++) {
            var alpha = map(i, 0, this.tailPositions.length, 100, 0); //100-0 = opacity range
            fill(255, 255, 255, alpha);
            ellipse(this.tailPositions[i].x, this.tailPositions[i].y, this.diameter - i * 2, this.diameter - i * 2);
        }

        // Draw the ball
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.update = function() {
        // Add the current position to the tail array
        this.tailPositions.unshift(createVector(this.x, this.y));

        // Remove the oldest tail position if the array gets too long
        if (this.tailPositions.length > this.tailLength) {
            this.tailPositions.pop();
        }

        // Update the ball's position
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.bounce();

    this.totalReset = function() {
        leftScore = 0;
        rightScore = 0;
        this.x = width/2;
        this.y = height/2;
        this.xspeed = 0;
        this.yspeed = 0;
    }
}
}