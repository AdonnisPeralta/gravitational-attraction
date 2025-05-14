let movers = [];
let attractor;

function setup() {
  createCanvas(400, 400);
  attractor = new Attractor();
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), random(height), random(1, 3));
  }
}

function draw() {
  background(240);
  attractor.show();

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.attract(movers[i]);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].show();
  }
}
