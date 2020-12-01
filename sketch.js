var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var speed , weight;
var line1,line2,line3;

function setup() {
  createCanvas(1540,710);

  speed = random(55,90);
  weight = random(400,1500);

  car1 = createSprite(50, 70, 20, 20);
  car1.velocityX = speed;
  car1.shapeColor = "white";
  
  car2 = createSprite(50, 630, 20, 20);
  car2.velocityX = speed;
  car2.shapeColor = "white";

  car3 = createSprite(50, 230, 20, 20);
  car3.velocityX = speed;
  car3.shapeColor = "white";

  car4 = createSprite(50, 430, 20, 20);
  car4.velocityX = speed;
  car4.shapeColor = "white";

  wall1 = createSprite(1480, 60, 10, 100);
  wall1.shapeColor = "grey";

  wall2 = createSprite(1480, 230, 10, 100);
  wall2.shapeColor = "grey";

  wall3 = createSprite(1480, 430, 10, 100);
  wall3.shapeColor = "grey";

  wall4 = createSprite(1480, 630, 10, 100);
  wall4.shapeColor = "grey";
  
  line1 = createSprite(700, 140, 2000, 10);
  line1.shapeColor = "white";
  
  line2 = createSprite(700, 340, 2000, 10);
  line2.shapeColor = "white";
  
  line3 = createSprite(700, 540, 2000, 10);
  line3.shapeColor = "white";

}

function draw() {
  background(0);  
  

  if(wall1.x-car1.x<(car1.width+wall1.width)/2){

  car1.velocityX = 0;
  


  var deformation = 0.5 * weight * speed* speed/22509;
  if(deformation>180)
 {
     car1.shapeColor = color(255,0,0);
     
  }

  if(deformation<180 && deformation>100)
  {
    car1.shapeColor = color(230,230,0);
    
  }

  if(deformation<100)
  {
    car1.shapeColor = color(0,255,0);
    
  }
 }
 
 if(wall4.x-car2.x<(car2.width+wall4.width)/2){

  car2.velocityX = 0;
  


  var deformation = 0.5 * weight * speed* speed/22509;
  if(deformation>180)
 {
     car2.shapeColor = color(255,0,0);
     
  }

  if(deformation<180 && deformation>100)
  {
    car2.shapeColor = color(230,230,0);
    
  }

  if(deformation<100)
  {
    car2.shapeColor = color(0,255,0);
    
  }
 }
 
 if(wall2.x-car3.x<(car3.width+wall2.width)/2){

  car3.velocityX = 0;
  


  var deformation = 0.5 * weight * speed* speed/22509;
  if(deformation>180)
 {
     car3.shapeColor = color(255,0,0);
     
  }

  if(deformation<180 && deformation>100)
  {
    car3.shapeColor = color(230,230,0);
    
  }

  if(deformation<100)
  {
    car3.shapeColor = color(0,255,0);
    
  }
 }
 
 if(wall3.x-car4.x<(car4.width+wall3.width)/2){

  car4.velocityX = 0;
  


  var deformation = 0.5 * weight * speed* speed/22509;
  if(deformation>180)
 {
     car4.shapeColor = color(255,0,0);
     
  }

  if(deformation<180 && deformation>100)
  {
    car4.shapeColor = color(230,230,0);
    
  }

  if(deformation<100)
  {
    car4.shapeColor = color(0,255,0);
    
  }
 }
 

  drawSprites();
  
  
}

