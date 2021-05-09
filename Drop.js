class Drop{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.5
        }
        this.body = Bodies.circle(x,y,3,options);
        World.add(world, this.body)
        this.r = 3;

    }
    display(){
      fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
       
    }
    updateDrops(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,400),y:random(0,400)})
        }
    }
}