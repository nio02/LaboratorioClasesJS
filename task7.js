export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
    this.currentXp = 0
    this.partyMembers = [this.name]
    this.inventory = []
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
      if (this.partyMembers[i] == player){
        console.log(`Player ${player.name} has been kicked from ${this.name}'s party.`);
        this.partyMembers.splice(i, 1);
      }
    }
  }
  addItem(item){
    if (this.inventory.length < 6){
      this.inventory.push(item);
      console.log(`A new item "${item}" was added to your Inventory. Current items: ${this.inventory}`);
    } else {
      console.log("You can't do that. Inventory is FULL.");
    }
  }
};

const player1 = new Player("Carloh", 2);
const player2 = new Player("Diego", 5);
const player3 = new Player("Mara", 4);
const player4 = new Player("Juan", 24);

player1.addItem("Varita");
player1.addItem("Escudo");
player1.addItem("Espada");
player1.addItem("Pocion1");
player1.addItem("Pocion2");
player1.addItem("Pocion3");
player1.addItem("Fierro");

