var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var cloudsGroup1, cloudsGroup2, cloudImage, a;
var obstaclesGroupLeft, obstacle1Left, obstacle2Left, obstacle3Left;
var obstaclesGroupRight, obstacle1Right, obstacle2Right, obstacle3Right;


//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("fondo.png");
  boyImg = loadAnimation("bird1.png","bird2.png","bird3.png");
  cashImg = loadAnimation("coin1.png", "coin2.png");
  //diamondsImg = loadImage("diamonds.png");
  //jwelleryImg = loadImage("jwell.png");
  swordImg = loadAnimation("bomb1.png" , "bomb2.png");
  endImg = loadAnimation("gameOver.png", "gameOverS.png");
  cloudImage = loadImage("nube.png");
  
  obstacle1Left = loadImage("obs1L.png");
  obstacle2Left = loadImage("obs2L.png");
  obstacle3Left = loadImage("obs3L.png");
  obstacle1Right = loadImage("obs1R.png");
  obstacle2Right = loadImage("obs2R.png");
  obstacle3Right = loadImage("obs3R.png");

}

function setup(){
  
//crear el canvas y ajustar el tamaño de la ventana para que sea compatible con el dispositivo 
createCanvas(windowWidth,windowHeight);
path=createSprite(width/2,200, width);
path.addImage(pathImg);
path.velocityY = 4;


//crear sprite boy corriendo
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
//a = createSprite(width/2,height-20,60,60);

gameOver = createSprite(width/2 , height/2);
gameOver.addAnimation("gameOver", endImg);

  
  
cashG=new Group();
//diamondsG=new Group();
//jwelleryG=new Group();
swordGroup=new Group();
cloudsGroup1= createGroup();
cloudsGroup2= createGroup();
obstaclesGroupLeft= createGroup();
obstaclesGroupRight= createGroup();


}

function draw() {

  if(gameState===PLAY){
    background("#71c5cf");
    gameOver.visible = false;
    boy.x = World.mouseX;
  
    edges= createEdgeSprites();
    boy.collide(edges);
  
  
    //código para reiniciar el fondo
    //if (path.y > height+700){
    //path.y = height/2;
    // }
    createCash();
    //createDiamonds();
    //createJwellery();
    createSword();
    spawnClouds();
    spawnObstaclesLeft();
    spawnObstaclesRight();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
     //else if (diamondsG.isTouching(boy)) {
      //diamondsG.destroyEach();
      //treasureCollection=treasureCollection + 100;
      
     //}//else if(jwelleryG.isTouching(boy)) {
      //jwelleryG.destroyEach();
      //treasureCollection= treasureCollection + 150;
      
     //}
    else if(obstaclesGroupLeft.isTouching(boy) || obstaclesGroupRight.isTouching(boy)){
      gameState = END;  
      //boy.addAnimation("SahilRunning", endImg);
      //boy.x=width/2;
      //boy.y=height/2;
      //boy.scale=0.6;
      gameOver.visible = true;
          
      cashG.destroyEach();
      //diamondsG.destroyEach();
      //jwelleryG.destroyEach();
      swordGroup.destroyEach();
      cloudsGroup1.destroyEach();
      cloudsGroup2.destroyEach();
      obstaclesGroupLeft.destroyEach();
      obstaclesGroupRight.destroyEach();
      boy.destroy();
          
      cashG.setVelocityYEach(0);
      //diamondsG.setVelocityYEach(0);
      //jwelleryG.setVelocityYEach(0);
      swordGroup.setVelocityYEach(0);
      cloudsGroup1.setVelocityYEach(0);
      cloudsGroup2.setVelocityYEach(0);
      obstaclesGroupLeft.setVelocityYEach(0); 
      obstaclesGroupRight.setVelocityYEach(0);   
    }
    else if(swordGroup.isTouching(boy)) {
      gameState=END;
      //boy.addAnimation("SahilRunning", endImg);
      //boy.x=width/2;
      //boy.y=height/2;
      //boy.scale=0.6;
      gameOver.visible = true;
          
      cashG.destroyEach();
      //diamondsG.destroyEach();
      //jwelleryG.destroyEach();
      swordGroup.destroyEach();
      cloudsGroup1.destroyEach();
      cloudsGroup2.destroyEach();
      obstaclesGroupLeft.destroyEach();
      obstaclesGroupRight.destroyEach();
      boy.destroy();
          
      cashG.setVelocityYEach(0);
      //diamondsG.setVelocityYEach(0);
      //jwelleryG.setVelocityYEach(0);
      swordGroup.setVelocityYEach(0);
      cloudsGroup1.setVelocityYEach(0);
      cloudsGroup2.setVelocityYEach(0);
      obstaclesGroupLeft.setVelocityYEach(0);
      obstaclesGroupRight.setVelocityYEach(0); 
                        
    }
    
      

      
  
    drawSprites();
    textSize(20);
    fill(255);
    text("Tesoro: "+ treasureCollection,width-150,30);
  }
   
}

function createCash() {
  if (World.frameCount % 150 == 0) {
   //Modificar las posiciones del dinero 
    var cash = createSprite(Math.round(random(width/4, width),40, 10, 10));
    cash.addAnimation("cash", cashImg);
    cash.x = Math.round(random(width/4, 1200));
    //cash.scale=0.12;
    cash.velocityY = 8;
    cash.lifetime = 200;
    cashG.add(cash);
  }
}

//function createDiamonds() {
  //if (World.frameCount % 320 == 0) {
       // Modificar las posiciones de los diamantes 

    //var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
   // diamonds.addImage(diamondsImg);
  //diamonds.scale=0.03;
  //diamonds.velocityY = 5;
  //diamonds.lifetime = 200;
  //diamondsG.add(diamonds);
//}
//}

//function createJwellery() {
  //if (World.frameCount % 410 == 0) {
    //Modificar las posiciones de las joyas para hacerlas aparecer en el tamaño de pantaña disponible.

    //var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
    //jwellery.addImage(jwelleryImg);
  //jwellery.scale=0.13;
  //jwellery.velocityY = 5;
  //jwellery.lifetime = 200;
  //jwelleryG.add(jwellery);
 // }
//}

function createSword(){
  if (World.frameCount % 430 == 0) {
    //Modificar las prosiciones de la espada para hacerla aparecer en el tamaño de pantaña disponible. 

    var sword = createSprite(Math.round(random(width/2, 350),40, 10, 10));
    sword.addAnimation("bomb", swordImg);
  sword.scale=1.3;
  sword.velocityY = 8;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}

function spawnClouds() {
  if (World.frameCount % 40 == 0) {
    
    var cloud1 = createSprite(Math.round(random(width/20, width/2),40, 10, 10));
    var cloud2 = createSprite(Math.round(random(width/2, width),40, 10, 10));
    
    cloud1.addImage(cloudImage);
    cloud2.addImage(cloudImage);
    
    cloud1.velocityY = 5;
    cloud1.lifetime = 200;
    cloudsGroup1.add(cloud1);
    cloud1.depth = boy.depth;

    cloud2.velocityY = 5;
    cloud2.lifetime = 200;
    cloudsGroup2.add(cloud2);
    cloud2.depth = boy.depth;
    boy.depth = boy.depth + 1;
  }
}

function spawnObstaclesLeft(){
  if(World.frameCount % 90 == 0){
    var obstacleL = createSprite(150,0,10,40);    

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: obstacleL.addImage(obstacle1Left);
              break;
      case 2: obstacleL.addImage(obstacle2Left);
              break;
      case 3: obstacleL.addImage(obstacle3Left);
              break;      
      default: break;          
    }

  obstacleL.velocityY = 5;
  //obstacle.lifetime = 300;
  obstaclesGroupLeft.add(obstacleL);
  }
}

function spawnObstaclesRight(){
  if(World.frameCount % 90 == 0){
    var obstacleR = createSprite(1100,0,10,40);    

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: obstacleR.addImage(obstacle1Right);
              break;
      case 2: obstacleR.addImage(obstacle2Right);
              break;
      case 3: obstacleR.addImage(obstacle3Right);
              break;      
      default: break;          
    }

  obstacleR.velocityY = 5;
  //obstacle.lifetime = 300;
  obstaclesGroupRight.add(obstacleR);
  }
}


