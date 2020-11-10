class Particles{
    constructer(x,y){
   var options ={
       restitution:0.04
   }
   this.radius=radius
   
   this.body=Bodies.circle(x,y,1,this.radius);
    this.color=color(random(0,255),random(0,255),random(0,255))
    
    World.add(world,this.body);
    }
    display(){
    var pos=this.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    fill(this.color)
    ellipseMODE(CENTER);
    ellipse(pos.x,pos.y,this.radius);
    pop();
    }
    
    }