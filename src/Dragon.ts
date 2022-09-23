import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(strength = 63) {
    super(999, strength);
  }
}