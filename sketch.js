const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var backgrimg;

function preload(){

backgrimg = loadImage ("snow3.jpg")
}

function setup(){
  createCanvas (1000,600);
  engine = Engine.create();
  world = engine.world;

 //snow2 = new Snow (500,300)
}

function draw(){
  Engine.update(engine);
background(backgrimg);
//snow2.display();
if(frameCount % 60 === 0){
snow2 = new Snow(random(100,900))
snow2.display();
}

}