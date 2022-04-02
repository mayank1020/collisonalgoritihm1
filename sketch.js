var mrec,frec

function setup() {
  createCanvas(800,400);
  frec=createSprite(200, 200, 50, 50); 
  mrec=createSprite(400, 200, 30, 50); 
  frec.shapeColor="green";
  mrec.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  console.log(mrec.x-frec.x)
  console.log(mrec.width/2+frec.width/2)
  mrec.x=World.mouseX;
  mrec.y=World.mouseY;
  if(mrec.x-frec.x<mrec.width/2+frec.width/2&&frec.x-mrec.x<mrec.width/2+frec.width/2&&mrec.y-frec.y<mrec.height/2+frec.height/2&&
  frec.y-mrec.y<mrec.height/2+frec.height/2)
{  frec.shapeColor="red";
mrec.shapeColor="red";                           

}else{frec.shapeColor="green";
mrec.shapeColor="green";

}


  drawSprites();
  




}