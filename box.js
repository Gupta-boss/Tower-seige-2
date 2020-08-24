class Box{
  constructor(x, y,color) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':0.3,
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y,60,60, options);
      this.color=color;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 5){        
        push();
        fill(this.color);
        rect(this.body.position.x, this.body.position.y,60,60);
      pop();
      }
       else{
        World.remove(world, this.body);
        push();
            this.Visiblity = this.Visiblity - 5;
            pop();
        }
      }
    };