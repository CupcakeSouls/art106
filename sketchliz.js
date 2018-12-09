//based on https://www.openprocessing.org/sketch/424072 by Abdelrhman Wassim

var x= 280;
var backgroundR = 209
var backgroundG = 153
var backgroundB = 198


function setup() {
  var canvas = createCanvas(600,400);
  canvas.parent('header');
  align="center"

  background(76,225,246);
}

function draw() {


	background(backgroundR, backgroundG, backgroundB);
    fromBG = color(76,225,246);
    toBG = color(69,24,19);
    backgroundColor = lerpColor(fromBG, toBG, mouseX/width);
    background(backgroundColor);
	
	
	
	
  
	
	
///Stars
	
  star(200, 200, 10, 5, 5);
	fill(76,225,246)
	
	 star(400, 200, 10, 5, 5);
	fill(76,225,246)
	
	 star(420, 230, 10, 5, 5);
	fill(76,225,246)
	
	star(350, 190, 10, 5, 5);
	fill(76,225,246)
	
	star(320, 230, 10, 5, 5);
	fill(76,225,246)
	
	star(350, 260, 10, 5, 5);
	fill(76,225,246)
	
	star(320, 165, 10, 5, 5);
	fill(76,225,246)
	
	star(280, 165, 10, 5, 5);
	fill(76,225,246)
	
	star(180, 110, 10, 5, 5);
	fill(76,225,246)
	
	star(210, 50, 10, 5, 5);
	fill(76,225,246)
	
	star(270, 95, 10, 5, 5);
	fill(76,225,246)
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
	
	
	//////the moon :)
	
	fill(backgroundR, backgroundG,backgroundB);
		 fromBG = color(76,225,246);
    toBG = color(69,24,19);
		backgroundColor = lerpColor(fromBG, toBG, mouseX/width);
		fill(backgroundColor)
	
				//actual moon color
	fill(backgroundR, backgroundG,backgroundB);
		 fromBG = color(255,198,0);
    toBG = color(180,255,235);
		backgroundColor2 = lerpColor(fromBG, toBG, mouseX/width);
		fill(backgroundColor2)
	
   var moonConstrainX = constrain(mouseX, 102, 540)

   
    noStroke();
    fill(backgroundColor2);
    ellipse(moonConstrainX, 70, 64, 64);
	
	 //Moon, moves in the X direction as mouseX changes
	fill(backgroundR, backgroundG, backgroundB);
    fill(backgroundColor);
    ellipse(moonConstrainX*1.30 - 95, 70, 54, 54);
	
	

	
	///mountains

	fill(backgroundR, backgroundG,backgroundB);
		fromBG=color(255,109,112)
		toBG=color(38,219,160)
		backgroundColor = lerpColor(fromBG, toBG, mouseX/width);
		fill(backgroundColor)
	
	fill(backgroundR, backgroundG,backgroundB);
		fromBG=color(255,62,112)
		toBG=color(38,219,160)
		backgroundColor3 = lerpColor(fromBG, toBG, mouseX/width);
		fill(backgroundColor3)
	
	

	
	triangle(70, 475, 358, 320, 486, 475);
	fill(backgroundColor)
	noStroke()
	
	triangle(-300, 475, 10, 50, 386, 475);
	fill(backgroundColor)
	noStroke()
	
	triangle(300, 475, 550, 160, 800, 475);
	fill(backgroundColor)
	noStroke()
	
	
	
	 //name
	textSize(30);
	noStroke ();
	fill(255);
	text("Elizabeth",48,390);
	text("Mayberry",180,390);
	
	console.log(mouseX,mouseY)
}



