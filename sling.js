class Sling{
    constructor(bodyA, pointB){
        
        var options = {
            bodyA : bodyA,
            pointB: pointB,
            stiffness : 0.1,
            length : 10
        }
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
        
    }
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        var pointA =this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}