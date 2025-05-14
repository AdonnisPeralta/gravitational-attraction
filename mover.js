// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = mass * 8;
    this.position = createVector(x, y);
    this.angle = random(0, 360);
    this.velocity = createVector(1, 0);
    this.acceleration = createVector(0, 0);
  }
  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
    
    this.angle -= 0.05;
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.position.x, this.position.y, this.radius * 2);
    let x = this.position.x + this.radius * cos(this.angle)
    let y = this.position.y + this.radius * sin(this.angle)
    
    fill(0);
    line(this.position.x, this.position.y, x, y);
  }
}