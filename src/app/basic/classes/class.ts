export class Player {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  receiveDamage(damageReceived: number) {
    if (damageReceived >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - damageReceived;
    }
    return this.hp;
  }
}
