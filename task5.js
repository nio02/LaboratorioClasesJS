export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
    this.currentXp = null
  }
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp(){
    this.level += 1;
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  expGain(xpPoints){
    this.currentXp += xpPoints
    if (this.currentXp == 100){
      this.levelUp();
      this.currentXp = 0;
    } else if (this.currentXp > 100){
      this.levelUp();
      this.currentXp = this.currentXp - 100;
    };
  }
};

const player1 = new Player("Carloh", 1);
console.log(player1.currentXp);
player1.expGain(120);
console.log(player1.currentXp);
player1.expGain(50);
console.log(player1.currentXp);
player1.expGain(30);
console.log(player1.currentXp);