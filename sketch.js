const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var plinkos=[]
var divisions=[]
var particles=[]

var divisionheight=300


function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create
 world = engine.world;

ground = new Ground(240,795);




}

function draw() {
  background(255,255,255);  
  for(var k=0;k<=width;k=k+80){
     division.push(new Division(k,height-divisionheight/2,10,divisionheight))
   }
  
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for(var j=65;j<=width-20;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j=90;j<=width-30;j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
  drawSprites();
}