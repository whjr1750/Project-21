var roadImage;
var carImage;
var boxImage, coinImage, coneImage, logImage;

var gameState = 1;
var PLAY = 1, box;




function preload() {
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
  road = createSprite(width / 2, 200);
  road.addImage(roadImage);
  road.velocityY = 7;
  road.scale = 4;

  //creating car
  car = createSprite(windowWidth / 2, windowHeight - 100);
  car.addImage(carImage);
  car.scale = 0.1;
  car.debug = true

}

function draw() {
  box = Math.round(random(1, 2))
  //codes for gamestate = PLAY
  if (gameState === PLAY) {

    //putting an background in
    background(0);

    //code to reset the road
    if (road.y > height) {
      road.y = height / 2;
    }

    //code for moving car to the right when right arrow is pressed 
    if (keyDown("right")) {
      car.x = 1179
      car.y = 786
    }

    //code for moving car to the left when left arrow is pressed 
    if (keyDown("left")) {
      car.x = 751
      car.y = 786
    }
    if (frameCount % 50 == 0) {
      console.log(box)
      if (box == 1) {
        createBox();
      } else if (box == 2) {
        createCoin();
      } else {
        createlog();
      }
    }

    //creating the sprites 
    drawSprites();

  }

}

function createBox() {
  console.log("executed")
  box = createSprite(random(0,windowWidth / 2), 1, 10, 10);
  box.addImage(boxImage);
  box.scale = 0.1
  box.velocityY = 3;
  log.lifetime = 500;
  box.debug = true
}





function createCoin() {
  
    coin = createSprite(random(0,windowWidth / 2), 1, 10, 10);
    coin.addImage(coinImage);
    coin.scale = 0.1
    coin.velocityY = 3;
    coin.lifetime = 500;
  


}
function createlog() {

    log = createSprite(random(0,windowWidth / 2), 1, 10, 10);
    log.addImage(logImage);
    log.scale = 0.3
    log.velocityY = 3;
    log.lifetime = 500;
  
}
