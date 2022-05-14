var roadImage;
var carImage;
var boxImage, coinImage, coneImage, logImage; 

var gameState=1;
var PLAY=1;




function preload(){
  roadImage = loadImage("Road.png");
  carImage = loadImage("CarImage.png");
  boxImage = loadImage("BoxImage.png");
  coinImage = loadImage("coinImage.png");
  coneImage = loadImage("trafficconeImage.png");
  logImage = loadImage("logImage.png");

}

function setup() {
  //create the canvas and adjust the window sizes to suit the device 
  createCanvas(windowWidth, windowHeight);
 //putting an background in
 background(0);
  //creating road
  road=createSprite(width/2,200);
  road.addImage(roadImage);
  road.velocityY=7;
  road.scale=4;

  //creating car
  car=createSprite(751,786);
  car.addImage(carImage);
  car.scale=0.3;

}

function draw() {
  
  //codes for gamestate = PLAY
  if(gameState===PLAY){
    
    //putting an background in
    background(0);

    //code to reset the road
    if(road.y > height){
     road.y = height/2;
   }

    //code for moving car to the right when right arrow is pressed 
    if(keyDown("right")){
      car.x = 1179
      car.y = 786
    }

    //code for moving car to the left when left arrow is pressed 
    if(keyDown("left")){
      car.x = 751
      car.y = 786
    }

    if(frameCount % 50 == 0){
      if(box == 1){
        createBox();
      } else if (box == 2) {
        createCoin();
      } else{
        createlog();
      }   }

    //creating the sprites 
    drawSprites();
    
  }
 
}

function createBox(){
  if(World.frameCount % 320 == 0){
  box = createSprite(random(750,1215),1, 10, 10);  
  box.addImage(boxImage);
  box.scale=0.3
  box.velocityY=3;
  box.lifetime=150;
  }


  }


function createCoin(){
 if(World.frameCount % 530 == 0){
  coin = createSprite(random(750,1215),1, 10, 10);  
  coin.addImage(coinImage);
 coin.scale=0.3
  coin.velocityY=3;
  coin.lifetime=150;
 }


  }
function createlog(){
  if(World.frameCount % 530 == 0){
  log = createSprite(random(750,1215),1, 10, 10);  
 log.addImage(logImage);
  log.scale=0.3
 log.velocityY=3;
 log.lifetime=150;
}
}