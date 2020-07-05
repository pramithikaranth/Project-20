var car,wall;
var speed,weight;
var carWidth = 50;
var wallWidth = 60;
var deformation = 0;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
 
  weight = random(49,1500);

  car = createSprite(50,200,carWidth,50);
  
  wall = createSprite(1500,200,wallWidth,height/2);
  wall.shapeColor = color(200,80,80);
  
  car.debug = true;
  wall.debug = true;

  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  
  if((wall.x-car.x)<=(carWidth/2 + wallWidth/2)){
    deformation = (0.5*weight*speed*speed)/22500;
    car.velocityX = 0;
    car.x = wall.x - (carWidth/2 + wallWidth/2);

    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
    else if((deformation<=180) && (deformation>=100)){
      car.shapeColor = color(230,230,0);
    }
    else if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
  }
  drawSprites();
}