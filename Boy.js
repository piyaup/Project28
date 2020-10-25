// class Boy{
//     constructor(bodyA,pointB){
//         var options ={
//             bodyA:bodyA,
//             pointB:pointB,
//             stiffness: 0.04,
//             length:10
//             }
//             this.pointB = pointB;
//             World.add(world,this.boy);

//         } 
//         display(){
//         }
//     }

class boy{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic: true,
            restitution:0.8,
            friction:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/boy.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}