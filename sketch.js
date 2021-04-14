var hr,houranl;
var min, minanl;
var sec, secondanl;


function setup() {
  createCanvas(800,400);
 angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90)
  hr=hour();
  min=minute();
  sec=second();
  houranl=map(hr%12,0,12,0,360);
  minanl=map(min,0,60,0,360);
  secondanl=map(sec,0,60,0,360);
  push()
  rotate(secondanl);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
  push()
  rotate(minanl);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop()
  push()
  rotate(houranl);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop()
  stroke(255,0,255)
  point(0,0)
  strokeWeight(7)
  noFill();
  stroke(255,0,0)
  arc(0,0,300,300,0,secondanl)
  stroke(0,255,0)
  arc(0,0,270,270,0,minanl)
  stroke(0,0,255)
  arc(0,0,250,250,0,houranl)
  drawSprites();
}