var PLAY=1
var ENd=0;
var gameState=1;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;



var Survival;



var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(700,450);
  
  monkey = createSprite(80,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.15;

  ground = createSprite(400,350,1200,10);
  
  score=0;
  Survival=0;
  
  obstacleGroup=createGroup();
  FoodGroup= new Group();
}


function draw() {
background("white");
  
 if(gameState===1){
       monkey.collide(ground);

    objects();
    food();
    Survival=Math.round(frameCount/frameRate())
   
   ground.velocityX=-10;
   if(ground.x<0){
     ground.x=ground.width/2;
     
   }
   
   if(keyDown("space")&& monkey.y>=298.95){
     monkey.velocityY=-15;
     
   }
   monkey.velocityY=monkey.velocityY+0.8;
  console.log(monkey.y);
   
   if(monkey.isTouching(FoodGroup)){
     score=score+2;
     FoodGroup.destroyEach();
   }
   else if(monkey.isTouching(obstacleGroup)){
     textSize(30)
     stroke("black");
     fill("black");
          text("You Lose",200,200);

     gameState=0;
     

   }

 }
  if(gameState===0){
    monkey.velocity=0;
     FoodGroup.destroyEach();
     obstacleGroup.destroyEach();
    ground.velocityX = 0;
  }

  drawSprites();
  stroke("black");
  textSize(10);
  strokeWeight(2);
  text(""+score,40,40);

    text("Survival Time "+Survival,300,40);

 
}

function food(){
  if(frameCount%80===0){
    var banana = createSprite(700,Math.ceil(random(110,230)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-10-score/2;
    banana.lifetime = 220;
    banana.scale=0.1;
    FoodGroup.add(banana);
  }
}
function objects(){
  if(frameCount%180===0){
    var obstacle=createSprite(700,315,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.18;
     obstacle.lifetime = 220;
    obstacle.velocityX=-10-score/2;
    obstacleGroup.add(obstacle);
  }
}





