var bg,bgImage;
var monkey,monkeyImage;
var ground;
var foodgroup;
var bananaImage;
var obstaclesImage,obstaclesGroup;
var score = 0;
function preload () {
  bgImage=loadImage ("jungle.jpg");
  monkeyImage=loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananaImage=loadImage ("banana.png");
  obstaclesImage=loadImage ("stone.png");
}

function setup() {
  createCanvas(800, 400);
  bg = createSprite (0,0,20,20);
  bg.velocityX=-2;
  bg.x=bg.width/2;
  bg.addImage (bgImage);
  bg.scale=1.5;
  
  monkey = createSprite  (100,250,20,20);
  monkey.addAnimation  ("running",monkeyImage);
  monkey.scale=0.3;
  
  ground = createSprite  (0,340,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  foodgroup = new Group ();
  obstaclesgroup = new Group ();
}
function draw() {
  background(220);
  if (bg.x < 100 ) {
      bg.x = bg.width/2;
      }
  if  (foodgroup.isTouching(monkey))   {
       foodgroup.destroyEach();
    score=score+2;
       }
  switch(score)   {
    case 10 : player.scale = 0.12;
      break;
      case  20 : player.scale = 0.14;
      break;
      case 30 : player.scale = 0.16;
      break;
      case 40 : player.scale = 0.18;
      break;
      default:break;
  }
  if (keyDown ("space"))  {
      monkey.velocityY = -15;
      }
  monkey.velocityY=monkey.velocityY+0.8;
  if   (obstaclesgroup.isTouching (monkey))  {
           monkey.scale = 0.08;
     }
  monkey.collide(ground);
  Spawnfruits ();
  Spawnobstacles ();
  drawSprites();
  text ("score: "+score,400,60);
}
function Spawnfruits  () {
  if (frameCount%80===0)  {
   var banana = createSprite (600,300,30,30);
    banana.y =random (20,50);
    banana.addImage (bananaImage);
    banana.scale = 0.1;
    banana.velocityX=-4;
    banana.lifetime = 200;
    foodgroup.add(banana);
    }
}

function Spawnobstacles () {
  if (frameCount%200===0)   {
  var obstacles = createSprite (600,300,30,30);
    obstacles.addImage (obstaclesImage);
    obstacles.scale = 0.2;
    obstacles.velocityX=-4;
    obstacles.lifetime = 150;
    obstaclesgroup.add(obstacles);
      }
}


