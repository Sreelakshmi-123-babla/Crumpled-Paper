class Paper{
    constructor(x,y,r){
        var options ={
            
            restitution :0.3,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(0);
        rotate(angle);   
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,53,53);
    }
}