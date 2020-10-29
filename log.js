class Log {
  constructor(x, y, width, angle) {
    var options = {
        'angle':angle,
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, 20, options);
    this.width = width;
    this.height = 20;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
