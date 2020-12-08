var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false ;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false ;
  wall = createSprite(600,100,50,100);
  wall.shapeColor = "green";
  car = createSprite(50,50,50,50)
  car.shapeColor = "cyan";
  car.velocityX=3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  
  if(isTouching(movingRect,wall)|| isTouching(movingRect,fixedRect)){
    textSize(40);
    fill("blue")
    text("Touched",300,300);
  }
  else{
    textSize(40);
    fill("red")
    text("Not touched",300,300);

  }
  bounceoff(car,wall)

  
  drawSprites();
}

