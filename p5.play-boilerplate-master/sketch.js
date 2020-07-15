var sun;
var mercury;
var venus;
var earth;
var sunradius; 

function setup() {
  createCanvas(1200,800);
 var sun = ellipse(600,400,60);
 var mercury = ellipse(400,300,40);
 var venus = ellipse(200,700,45);
 var earth = ellipse(300,200,55);
}

function draw() {
  background(255,255,255);
   angleMode(DEGREES);
   translate(width/2,height/2);
   if(sun.collide(mercury)){
     mercury.destroy();
   } 
   angle = angle + anglespeed;
   if(frameCount%1===0){
     sun.scale = sun.scale+0.01;
   }

  drawSprites();
}