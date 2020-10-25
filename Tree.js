

class Tree{
  constructor(x, y, width, height) {
      var options = {
        isStatic:true
       
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/tree.png");
      World.add(world, this.body);
     
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      scale:4;
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}



// class Tree {
//   Constructer(x, y, width, height) {
//       var options = {
//           isStatic: true
//     }
//     this.width = width;
//     this.height = height;
//     this.body = Bodies.rectangle(x, y, options);
//     this.image = loadImage("sprites/tree.png");
//     World.add(world, this.body);
//   }
//   display() {
//       push();
//      // translate(this.body.position.x, this,body.position.y);
//      // rotate(angle);
//       imageMode(CENTER);
//       this.image(this.image, 0, 0);
//       pop();
//   }
// }