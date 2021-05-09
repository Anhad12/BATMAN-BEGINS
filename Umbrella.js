class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("images/Walking Frame/walking_1.png")
        World.add(world, this.body)
        this.r = r;

    }
    display(){
    fill("blue")
    imageMode(CENTER)
    image(this.image,this.body.position.x, this.body.position.y, this.r*4, this.r*4);
       
    }

}