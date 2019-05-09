var diam1=0;

function setup() {
	createCanvas(500,500);
}

function draw() {
	background("#003366");
	fill("#ff99ff");
	stroke("#ff3333");
	strokeWeight (7);
	ellipse(200,200,diam1,diam1);
	fill("#ff99ff");
	ellipse(mouseX,mouseY,30,30);
	textSize(20);
	textFont("Georgia");
	textStyle(ITALIC);
	textAlign(CENTER);
	text("MMP 100 Programming Project",200,100);
}

function mousePressed(){
	diam1=diam1+5;
}
//the first ellipse gets bigger when you left click the mouse. 
//the second ellipse follows the movement of the mouse. 