var table1;
var table2;
var player1;
var player2;
var ball;
var leftScore = 0;
var rightScore = 0;
var flag = false;
var escape_pressed = false;
var package;


function setup() {
	//noCursor();

	frameRate(60);
	createCanvas(windowWidth / 2 , windowHeight / 1.5);

	table1 = new Tables(width - windowWidth / 2 , 0);
	table2 = new Tables(width - 16 , 0);

	player1 = new Players(width - windowWidth / 2 + 23 , height/2 - 45);
	player2 = new Players(width - 44 , height/2 - 45);

	ball = new Ball();

	overlay = document.getElementById("overlay");
}

function draw() {
	// background(31, 80, 51);
	let c1 = color(31, 40, 51);
	let c2 = color(0, 204, 204);
	
	// Create the gradient using the lerpColor() function
	for (let y = 0; y < height; y++) {
	  let inter = map(y, 0, height/2, 0, 1);
	  if (y > height/2) {
		inter = map(y, height/2, height, 1, 0);
	  }
	  let c = lerpColor(c1, c2, inter);
	  stroke(c);
	  line(0, y, width, y);
	}
	

	table1.show();
	table2.show();

	player1.update(1);
	player1.show();

	player2.update(2);
	player2.show();

	ball.update();
	ball.show();

	textSize(32);
	fill(102, 252, 241);
	textAlign(CENTER);
	// text(leftScore, width / 2 - 60, 40);
	// text(rightScore, width / 2 + 60, 40);
	text(leftScore, 50, 40);
	text(rightScore, width - 50, 40);


	if (flag == true) {
		textSize(26);
		fill(40, 184, 184);
		textAlign(CENTER);
		text("Paused", width/2, 50); 
	}

	if (escape_pressed == true) {
		textSize(26);
		fill(40, 184, 184);
		textAlign(CENTER);
		text("	Press 'esc' to start!", width/2, 50); 
	}
	
}

function keyTyped() {
	if ((key === 'p' || key === 'P') && escape_pressed == false) {
		if (flag == false) {
			noLoop();
			flag = true;
		}
		else {		
			loop();
			flag = false;
		}
	}
}

function keyPressed() {
	// ESC = reset
    if (keyIsDown(ESCAPE) && flag == false) {                   
        if (escape_pressed == false) {
		escape_pressed = true;
		ball.totalReset();
		player1.resetPlayer();
		player2.resetPlayer();
		overlay.style.display = "none";
        }
        else {
		escape_pressed = false;
			
		// new ball resets movements and speed
		ball = new Ball();                    
        }
    }
}
