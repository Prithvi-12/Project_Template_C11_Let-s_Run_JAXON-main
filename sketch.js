
var Runner ,Runner_running;
var path,pathImage,invisibleGround;
   
function preload(){



 Runner_running=loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");


}

function setup(){
  createCanvas(400,400)
  
  

  path = createSprite(200,200)
   path .addImage(pathImage);
   path.scale = 1.2;
   //invisibleGround = createSprite(200,185,400,10);
  // invisibleGround.visible = false;
   
   //create a Runner sprite
  Runner=createSprite(180,340,30,30);
  Runner.addAnimation("running",Runner_running);
  Runner.scale=0.08;
   
 
}

function draw(){
  background("white");

  Runner.x = World.mouseX;
  path.velocityY = 4


  if(path.y>400){
    path.y = height/2
  }
//   if (keyDown("space") && Runner.y>=150) {
//     Runner.velocityY = -10;
//   }
  
// Runner.velocityY=Runner.velocityY+0.5;
//Runner.collide(invisibleGround);



  drawSprites();
  


}