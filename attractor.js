const gravity = 1.0;

class Attractor {
  constructor() {
    this.position = createVector(width/2, height/2);
    this.mass = 20;
  }
  
  attract(mover) {
    // calculate direction from mover to attractor
    let force = p5.Vector.sub(this.position, mover.position);
    // get the magnitude
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    
    // calculate gravitational force
    let attraction = (gravity * this.mass * mover.mass) / (distance * distance)
    force.setMag(attraction);
    // return the force
    return force;
  }
  
  show() {
    fill(220);
    stroke(0);
    strokeWeight(4);
    circle(this.position.x, this.position.y, this.mass * 2);
  }
}