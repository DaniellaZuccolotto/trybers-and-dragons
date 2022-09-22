export default abstract class Race {
  protected counter = 0;

  constructor(private _name: string, private _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;
    this.counter = Race.createdRacesInstances();
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
    return 1;
  }

  abstract get maxLifePoints(): number;
}