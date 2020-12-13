var bullet, wall, thickness; 
var speed, weight;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet= createSprite(50,200,30,20);
  bullet.velocityX = speed;
  
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);


  
}

function draw() {
  background(0); 
  

text("Speed:"+ speed, 500,350);
text("Weight:"+ weight, 700,350);
text("Thickness:"+ thickness, 900,350);

  //changing the bullet's colors

  if (bulletCollide(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5* weight* speed* speed/ (thickness* thickness* thickness);
    text("Damage:"+ damage, 1100,350)

    if(damage > 10){
      wall.shapeColor= color(255,0,0);
    }
    if(damage < 10 ){
      wall.shapeColor= color(124,252,0);
  }
}


  drawSprites();
}

function bulletCollide(fig1,fig2){

  bulletRightEdge = fig1.x + fig1.width;
  wallLeftEdge = fig2.x

if(bulletRightEdge>=wallLeftEdge){

  return true;
  }
  
  return false;
  
}