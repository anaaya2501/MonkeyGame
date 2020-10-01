
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,400);
  
  monkey = createSprite(100,300);
  monkey.addAnimation("label1",monkey_running);
  monkey.scale = 0.16;
  
  
  ground = createSprite(300,350,600,20)
  invisibleGround = createSprite(300,360,600,20);
  invisibleGround.visible = false;
  
  obstacleGroup = new Group();
  FoodGroup = new Group();


  
}


function draw() {
  background(180);
    text("score = " + score,20,50);
         
  
  
  if(keyDown("space")){
    monkey.velocityY = -8;
    }
  monkey.velocityY = monkey.velocityY + 0.3;
  
  monkey.collide(invisibleGround);  
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score = score + 1 ;
  }
 
  
  
  
  obstacles();
  foods();
  drawSprites();
  
  

}

function obstacles(){
  if(frameCount%80===0){
 var obstacles = createSprite(550,305);
  obstacles.addImage("label2",obstacleImage);
  obstacles.scale = 0.2;
    obstacles.velocityX = -6;
    obstacles.lifetime = 400;
    obstacleGroup.add(obstacles);
}
  
  
}

function foods(){
  if(frameCount%80===0){
 var foods = createSprite(550,200);
  foods.addImage("label3",bananaImage);
  foods.scale = 0.1;
  foods.velocityX = -6;
  foods.lifetime = 400;
  FoodGroup.add(foods);
}
  
  
}

















