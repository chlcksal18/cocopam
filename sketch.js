var twinkles = [];
var balls = [];
var ball;
function setup() {
	createCanvas(640, 480);
  //트윙클
  twinkles.push(new Twinkle(random(width), random(height)));
	balls.push(new Ball(random(width), random(height)));
}function draw() {
	background(0);
  	for(var i = 0; i<twinkles.length; i++){
		twinkles[i].move();
		twinkles[i].display();
	}
	if (twinkles.length > 1)
	{
		}


	for(var i = 0; i<balls.length; i++){
		for (var j =0; j < balls.length; j++){
			if(i !=j){
				balls[i].connect(balls[j]);
			}
		}
		balls[i].move();
		balls[i].display();
	}
}function keyPressed(){
	twinkles.push(new Twinkle(mouseX, mouseY));
}function Twinkle(x,y){
	this.x = x;
	this.y = y;
	this.d = random(1,10);
	this.speed = 1;
		this.move = function(){
		this.x += random(-this.speed,+this.speed);
		this.y += random(-this.speed,+this.speed);

	};
	this.display = function() {
		fill (random(100),random(216),random(225));
		ellipse(this.x, this.y, this.d, this.d);
	};
}function mousePressed(){
	//ball = new Ball(mouseX, mouseY);
	balls.push(new Ball(mouseX, mouseY));
}//When mouse drag
function mouseDragged(){
	//ball = new Ball(mouseX, mouseY);
	balls.push(new Ball(mouseX, mouseY));
}//Ball Class
class Ball {
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.d = random(1, 30);
		this.speedx = random(-1, 1);
		this.speedy = random(-1, 1);
	}
	move(){
		this.x += this.speedx;
		this.y += this.speedy;
    }
	display(){
		fill(255);
		stroke(0);
		ellipse(this.x, this.y, this.d, this.d);
	}
	connect(other){

		if(dist(this.x, this.y, other.x, other.y) < 100) {
			stroke(255);
			beginShape()
			vertex(this.x, this.y);
			vertex(other.x, other.y);
			endShape();
		}
	}
}
