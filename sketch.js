var Space, Spaceimg;
var Rocket, Rocketimg;
var asteriods,  asteriodsimg;
var asteriosGroup, asteriodsGroup;
var PLAY= 1;
var END= 0;
var gamestate = PLAY;

function preload(){
  Spaceimg= loadImage("Space.jpg");
  Rocketimg= loadImage("Rocket.jpg");
  asteriodsimg=  loadImage("asteriods.jpg");
}

function setup(){
  createCanvas(600,600);
  Space=createSprite(300,300)
  Space.addImage(Spaceimg);
  Space.velocityY=2;
  
  Rocket=createSprite(300,300)
  Rocket.addImage(Rocketimg);
  Rocket.scale=(0.5);
  asteriodsGroup= new Group(); 
}

function draw(){
  
 if(gamestate==PLAY){ 
  
  if(Space.y>550){
    Space.y=300;
  }
  if(keyDown("left_arrow")){
    Rocket.x=Rocket.x-4; 
  }
  
  if(keyDown("right_arrow")){
    Rocket.x=Rocket.x+4;
  }
  
  if(keyDown("space")){
    Rocket.velocityY=-4;
  }
  
  Rocket.velocityY= Rocket.velocityY+0.9;
  
  Spawn_asteriods();
 
   
   if(Rocket.isTouching(asteriodsGroup)|| Rocket.y>600){
     gamestate=END
   }
   
 }
  
  if(gamestate==END){
    background(0);
    Space.destroy();
    asteriodsGroup.destroyEach();
    Rocket.destroy();
    textSize(25);
    fill("blue"),
    text("GAME OVER",300,300);
  }
    
  
  
  
  drawSprites();
}

function Spawn_asteriods(){
  if( frameCount%100==0){
    asteriods= createSprite(500,0);
    asteriods.addImage(asteriodsimg);
    asteriods.velocityY=3;
    asteriods.x=Math.round(random(100,500));
    asteriodsGroup. add (asteriods);
    asteriods.scale=0.3;
   
    
   
  }
}






