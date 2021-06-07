var score=0;
var PLAY=1;
var END=0;
var gameState="PLAY";

function preload(){
   bgImg = loadImage("images/bg.png");
   manImg = loadImage("images/man.png");
   p1Img = loadImage("images/plastic1.png");
   p2Img = loadImage("images/plastic2.png");
   p3Img = loadImage("images/plastic3.png");
   s1Img = loadImage("images/sponge1.png");
   s2Img = loadImage("images/sponge2.png");
   s3Img = loadImage("images/sponge3.png");
   r2Img = loadImage("images/rubber1.png");
   r1Img = loadImage("images/rubber2.png");
   r3Img = loadImage("images/rubber3.png");
   rsound = loadSound("rubbersound.mp3");
   win = loadSound("hurray.mp3");
   lose = loadSound("gameover.mp3");

}
function setup(){
  createCanvas(1535,720);

  man=createSprite(130,650);
  man.addImage(manImg);
  //man.debug=true;
  man.setCollider("rectangle",0,0,150,40)
  
 p1Group=createGroup();
 p2Group=createGroup();
 p3Group=createGroup();
 s1Group=createGroup();
 s2Group=createGroup();
 s3Group=createGroup();
 r1Group=createGroup();
 r2Group=createGroup();
 r3Group=createGroup();
}

function draw(){

 
  

  if(gameState==="PLAY"){

    background(bgImg);
  textSize(30);
  fill("black");
  stroke("black");
  text("Score: "+score,displayWidth-150,30);


  if(keyDown(LEFT_ARROW) && man.x>=130){
    man.x=man.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    man.x=man.x+10;
  }
  if(frameCount%100===0){
    var num=round(random(1,9));
    if(num===1){
      p1();
    }
    else if(num===2){
      p2();
    } 
    else if(num===3){
      p3();
    } 
    else if(num===4){
      s1();
    } 
    else if(num===5){
      s2();
    } 
    else if(num===6){
      s3();
    } 
    else if(num===7){
      r1();
    } 
    else if(num===8){
      r2();
    } 
    else{
      r3();
    } 

  }

  if(man.isTouching(s1Group)){
    score=score+2;
    s1Group.destroyEach();
    win.play();
  }
  if(man.isTouching(s2Group)){
    score=score+2;
    s2Group.destroyEach();
    win.play();
    
  }
  if(man.isTouching(s3Group)){
    score=score+2;
    s3Group.destroyEach();
    win.play();
  }


  if(man.isTouching(r1Group)){
    score=score+1;
    r1Group.destroyEach();
    rsound.play();
  }
  if(man.isTouching(r2Group)){
    score=score+1;
    r2Group.destroyEach();
    rsound.play();
  }
  if(man.isTouching(r3Group)){
    score=score+1;
    r3Group.destroyEach();
    rsound.play();
  }


  if(man.isTouching(p1Group)||man.isTouching(p2Group)||man.isTouching(p3Group)){
    lose.play();
    gameState="END";
    textSize(60);
    text("Game Over",760,360)
    text("Press 'r' to restart",760,200);
    s1Group.destroyEach();
    s2Group.destroyEach();
    s3Group.destroyEach();
    r1Group.destroyEach();
    r2Group.destroyEach();
    r3Group.destroyEach();
    p1Group.destroyEach();
    p2Group.destroyEach();
    p3Group.destroyEach();

  }


  drawSprites();
}
if(keyDown("r")){
  restart();
}
}


function p1(){
  plastic1=createSprite(random(200,1300),0);
  plastic1.addImage(p1Img);
  plastic1.scale=0.2;
  plastic1.velocityY=5;
  p1Group.add(plastic1);
}

function p2(){
 plastic2=createSprite(random(200,1300),0);
  plastic2.addImage(p2Img);
  plastic2.scale=0.1;
  plastic2.velocityY=5;
  p2Group.add(plastic2);
}

function p3(){
  plastic3=createSprite(random(200,1300),0);
  plastic3.addImage(p3Img);
 plastic3.scale=0.2;
 plastic3.velocityY=5;
 p3Group.add(plastic3);
}

function s1(){
  sponge1=createSprite(random(200,1300),0);
  sponge1.addImage(s1Img);
  sponge1.scale=0.1;
  sponge1.velocityY=5;
  s1Group.add(sponge1);
}

function s2(){
  sponge2=createSprite(random(200,1300),0);
  sponge2.addImage(s2Img);
  sponge2.scale=0.4;
  sponge2.velocityY=5;
  s2Group.add(sponge2);
}

function s3(){
  sponge3=createSprite(random(200,1300),0);
  sponge3.addImage(s3Img);
  sponge3.scale=0.3;
  sponge3.velocityY=5;
  s3Group.add(sponge3);
}

function r1(){
  rubber1=createSprite(random(200,1300),0);
  rubber1.addImage(r1Img);
  rubber1.scale=0.4;
  rubber1.velocityY=5;
  r1Group.add(rubber1);
}

function r2(){
  rubber2=createSprite(random(200,1300),0);
  rubber2.addImage(r2Img);
  rubber2.scale=0.1;
  rubber2.velocityY=5;
  r2Group.add(rubber2);
}

function r3(){
  rubber3=createSprite(random(200,1300),0);
  rubber3.addImage(r3Img);
  rubber3.scale=0.2;
  rubber3.velocityY=5;
  r3Group.add(rubber3);
}

function restart(){
  gameState="PLAY";
}
  
