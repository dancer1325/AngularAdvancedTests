import { EventEmitter } from '@angular/core';

export class SecondPlayer {
  hp: number;
  hpEvent = new EventEmitter<number>(); // Emit an event which receives a number

  constructor() {
    this.hp = 100;
  }

  receiveDamage(inputDamage: number) {
    if (inputDamage >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - inputDamage;
    }

    this.hpEvent.emit(this.hp); // Emit an event with the new value of the hp
  }
}
