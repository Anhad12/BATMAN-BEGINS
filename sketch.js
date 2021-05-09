const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var boy;
var engine, world;
var drops=[];
function preload(){
 l1=loadImage("images/thunderbolt/1.png")   
 l2=loadImage("images/thunderbolt/2.png") 
 l3=loadImage("images/thunderbolt/3.png") 
 l4=loadImage("images/thunderbolt/4.png") 
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    for(var i=0;i<350;i++){   
        drops.push(new Drop(random(0,400), random(0,400)))
    }
    boy = new Umbrella(200,600,50)
}

function draw(){
    Engine.update(engine);
    background(0); 
    for(var i = 0; i<drops.length; i++){
        drops[i].display();
        drops[i].updateDrops();
    }
    boy.display();
    var rand= Math.round(random(1,4));
    if(frameCount%60===0){
        switch(rand){
            case 1:image(l1,random(10,370),random(10,30)); break;
            case 2:image(l2,random(10,370),random(10,30)); break;
            case 3:image(l3,random(10,370),random(10,30)); break;
            case 4:image(l4,random(10,370),random(10,30)); break;
            default:break;
        }

    }
}   

