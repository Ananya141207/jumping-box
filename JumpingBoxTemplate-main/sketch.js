var surf1,surf2,surf3,surf4;
var box;


function setup(){
canvas=createCanvas(800,800);


box=createSprite(random(10,750),300,20,20);
box.shapeColor="white"
box.velocityX=3;
box.velocityY=3;

surf1=createSprite(250,550,100,20);
surf1.shapeColor="red";
surf2=createSprite(400,550,100,20);
surf2.shapeColor="purple";
surf3=createSprite(550,550,100,20);
surf3.shapeColor="brown";
surf4=createSprite(700,550,100,20);
surf4.shapeColor="blue"

}

function draw(){
 background("grey");

createEdgeSprites();
edges=createEdgeSprites();
box.bounceOff(edges);

if(surf1.isTouching(box) && box.bounceOff(surf1)){
box.shapeColor="yellow";

}


if(surf2.isTouching(box) && box.bounceOff(surf2)){
    box.shapeColor="yellow";
    
    }

    
if(surf3.isTouching(box) &&  box.bounceOff(surf3)){
    box.shapeColor="yellow";
    
    }

    
if(surf4.isTouching(box) &&  box.bounceOff(surf4)){
    box.shapeColor="yellow";
    
    }


drawSprites();
}
