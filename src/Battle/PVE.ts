import Monster from '../Monster';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemy: SimpleFighter[];
  constructor(player: Fighter, enemy: SimpleFighter[] = [new Monster()]) {
    super(player);
    this._enemy = enemy;
  }

  fight(): number {
    this._enemy.forEach((enemy) => {
      while (this.player.lifePoints > 0 && enemy.lifePoints > 0) {
        this.player.attack(enemy);
        enemy.attack(this.player);
      }
    });
    return super.fight();
  }
}