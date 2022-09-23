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
    while (this.player.lifePoints > 0
       && this._enemy.map((e) => e.lifePoints > 0)) {
      this._enemy.map((e) => this.player.attack(e));
      this._enemy.map((e) => e.attack(this.player));
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}