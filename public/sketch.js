
var socket;

let r = 255;
let g = 255;
let b = 255;
let reset = 0;
let Size = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawUi();
   socket = io.connect('http://localhost:3000');
    socket.on('mouse',
   function(data){
    r=data.r; g=data.g; b=data.b;
    reset = data.reset;
    drawLine(data.x,data.y,data.px,data.py);

  });
}



function draw() {

if (mouseIsPressed) {
  if (mouseX > 25 && mouseX < 65 && mouseY > 60 && mouseY < 100) {
    r = 255;
    g = 255;
    b = 255;
    reset=0;
  }
  if (mouseX > 75 && mouseX < 115 && mouseY > 60 && mouseY < 100) {
    r = 255;
    g = 0;
    b = 0;
    reset=0;
    
  }
    if (mouseX > 25 && mouseX < 65 && mouseY > 110 && mouseY < 150) {
    r = 0;
    g = 255;
    b = 0;
    reset=0;
  }
  if (mouseX > 75 && mouseX < 115 && mouseY > 110 && mouseY < 150) {
    r = 0;
    g = 0;
    b = 255;
    reset=0;
    
  }
  if (mouseX > 25 && mouseX < 65 && mouseY > 160 && mouseY < 200) {
    r = 255;
    g = 255;
    b = 0;
    reset=0;
  }
  if (mouseX > 75 && mouseX < 115 && mouseY > 160 && mouseY < 200) {
    r = 255;
    g = 0;
    b = 255;
    reset=0;
  }
  if (mouseX > 40 && mouseX < 100 && mouseY > 260 && mouseY < 290) {
    r = 0;
    g = 0;
    b = 0;
    reset=1;
    
  }

  else if (mouseX > 141 && pmouseX >141 ){
   drawLine(mouseX,mouseY,pmouseX,pmouseY);
   emitsocket(mouseX,mouseY,pmouseX,pmouseY);
  }
  
  }
}
function drawLine(mouseX,mouseY,pmouseX,pmouseY){
  if(reset ==0){
    stroke(r,g,b);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  else if(reset==1){
    noStroke();
    fill(0);
    ellipse(mouseX,mouseY,10,10);
  }
}

function emitsocket(mouseX, mouseY){
   var data = {
    x : mouseX,
    y : mouseY,
    px: pmouseX,
    py: pmouseY,
    r:r,
    g:g,
    b:b,
    reset:reset
  };
  socket.emit('mouse', data);
}

function drawUi() {


//function border
  stroke(255, 255, 255);
  strokeWeight(1);
  line(140, 15, 140, 900);
  line(20, 16, 125, 16);
  line(20, 24, 125, 24);
  line(20, 220, 125, 220);
  line(20, 228, 125, 228);

   //Color Selection
  fill(255, 255, 255);
  strokeWeight(3);
  textSize(18);
  stroke(0, 0, 255);
  text("Select Color", 20, 50);

  //White - Button 
  fill(255, 255, 255);
  noStroke();
  rect(25, 60, 40, 40);

  //Red Button
  fill(255, 0, 0);
  noStroke();
  rect(75, 60, 40, 40);

  //Green Button
  fill(0, 255, 0);
  fill(0, 255, 0);
  noStroke();
  rect(25, 110, 40, 40);

  //Blue Button
  fill(0, 0, 255);
  noStroke();
  rect(75, 110, 40, 40);

  //Yellow Button
  fill(255, 255, 0);
  noStroke();
  rect(25, 160, 40, 40);

  //Purple
  fill(255, 0, 255);
  noStroke();
  rect(75, 160, 40, 40);

  noStroke();
  fill(255, 255, 255);
  text("Eraser", 45, 250);

  //Eraser Button
  fill(255, 140, 200);
  strokeWeight(1);
  stroke(255, 255, 255);
  rect(40, 260, 60, 30);


}

function mousePressed() {
  print(mouseX,mouseY);
  print(r);
  print(g);
  print(b);
  print(reset);
}