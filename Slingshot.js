 class Slingshot{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.004,
            length:10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        push();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x + 20, pointA.y, pointB.x+10, pointB.y);
              
            }
            else{
                strokeWeight(3);
                line(pointA.x - 25, pointA.y, pointB.x +10, pointB.y);

                
            }
           
            
            pop();
        }
    }
    
}


//     display(){
//         if(this.sling.bodyA) {
//         var pointA = this.sling.bodyA.position;
//         var pointB = this.pointB;
//         //push();
//         strokeWeight (5);
//         line (pointA.x,pointA.y,pointB.x,pointB.y);
//        // pop();
//     }
// }
// }