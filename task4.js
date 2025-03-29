export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
  }
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp(){
    this.info()
    this.level += 1;
  }
};


// const player1 = new Player("Carloh", 8)
// player1.info();
// player1.levelUp();
// player1.info();
