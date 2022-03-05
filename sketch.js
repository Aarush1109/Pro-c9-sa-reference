
function setup() {
  createCanvas(600,600);
  background(51);
  box = createSprite(300,300,30,30);
  box.shapeColor = "black";
}

function draw() 
{

  if (keyDown("left")){
    box.position.x -=5;
    }
  if (keyDown("right")){
      box.position.x +=5;
    }
  if (keyDown("up")){
      box.position.y -=5;
    }
  if (keyDown("down")){
      box.position.y +=5;
    }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("yellow");
    
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("red");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }
  
  drawSprites();
}

