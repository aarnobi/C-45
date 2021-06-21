var spaceShip,spaceShipImage,asteroids,asteroidsImage;
var earth,earthImage,mars,marsImage,bgImage;

function preload(){
  spaceShipImage = loadImage("Images/spaceShip.png");
  asteroidsImage = loadImage("Images/asteroid.png");
  earthImage = loadImage("Images/Earth.png");
  marsImage = loadImage("Images/Mars.png");
  bgImage = loadImage("Images/Space.jpg");
}

function setup() {
  createCanvas(800,400);
  spaceShip = createSprite(200,200);
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale = 0.3;

  earth = createSprite(100,200);
  earth.addImage(earthImage);
  earth.scale = 0.5;

  mars = createSprite(600,200);
  mars.addImage(marsImage);
  mars.scale = 0.5;

}

function draw() {
  background(bgImage);
  spaceShip.y = World.mouseY;

  if(spaceShip.isTouching(asteroids)){
    spaceShip.destroyEach();
  }
  spawnAsteroids();
  drawSprites();
}

function spawnAsteroids(){
  if(frameCount % 50 === 0){
    var obstacle = createSprite(800,200,40,50);
    obstacle.velocityX = -(5);
    obstacle.y = Math.round(random(90,200));
    obstacle.addImage(asteroidsImage);
    obstacle.scale = 0.4;
  }
}