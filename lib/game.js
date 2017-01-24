const Circle = require("./circle");

class Game {
  constructor() {
    this.circles = [];

    this.addCircles();
  }

  addCircles() {
    for (let i = 0; i < 100; i++ ) {
      this.add(new Circle({ game: this }));
    }
  }
}
