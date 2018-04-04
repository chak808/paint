var vw = window.innerWidth;
var vh = window.innerHeight;
var gui;
var value = 'black';
var Color = '#000000';
var BrushSize = [1,5,10];
var Mode = ['Draw','Clear All'];
function setup() {
  createCanvas(vw,vh);
  background('white');
  stroke(0,50);
  gui = createGui('My Menu',0,0);
  gui.addGlobals('Color','Mode','BrushSize');
}

function draw(){
 if (mouseIsPressed) {
   strokeWeight(BrushSize);
   stroke(color(Color));
 }
}