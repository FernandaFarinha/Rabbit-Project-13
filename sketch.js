var garden,rabbit;
var gardenImg,rabbitImg;
var select_sprites = Math.round(random(1,3));


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);


garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  drawSprites();
  


if (frameCount % 80 == 0){
  if (select_sprites == 1){
    apple();
  } else if (select_sprites == 2){
    orangeL();
  } else {
    redL();
  }
}

}

function apple(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage (apleimg);
apple.scale=0.07;
apple.velocityY= 3;
apple.lifetime = 150
}
function orangeL(){
  orangeL = createSprite(random(50,350),40,10,10);
  orangeL.addImage (orangeimg);
  orangeL.scale=0.08;
  orangeL.velocityY= 3;
  orangeL.lifetime = 150
  }
function redL(){
  redL = createSprite(random(50,350),40,10,10);
  redL.addImage (redImg);
  redL.scale=0.06;
  redL.velocityY= 3;
  redL.lifetime = 150
    }



