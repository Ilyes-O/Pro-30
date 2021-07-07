class Polygon {
    constructor(x, y,width,height) {
      var options = {
        'density':2.5,
        'friction': 1.0,
        'restitution':0.5
      }

      this.image = loadImage("polygon.png");
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = 60;
     this.height = 60;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  };