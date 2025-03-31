export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
    this.currentXp = 0
    this.partyMembers = [this.name]
  }
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp(){
    this.level += 1;
    this.info();
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
  addParty(player){
    this.partyMembers.push(player.name);
    console.log(`Player ${player.name} joined ${this.name}'s Party!`);
  }
  removeParty(player){
    for (let i = 0; i < this.partyMembers.length; i++){
      if (this.partyMembers[i] == player.name){
        console.log(`Player ${player.name} has been kicked from ${this.name}'s party.`);
        this.partyMembers.splice(i, 1);
      }
    }
  }
};

const player1 = new Player("Carloh", 2);
const player2 = new Player("Diego", 5);
const player3 = new Player("Mara", 4);
const player4 = new Player("Juan", 24);

player1.addParty(player2);
player1.addParty(player3);
player1.addParty(player4);
console.log(player1.partyMembers);
player2.expGain(120);
player3.expGain(100);
console.log(player1.partyMembers);
player1.removeParty(player2);
player1.removeParty(player3);
console.log(player1.partyMembers);