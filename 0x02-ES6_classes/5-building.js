/**
 *
 * @class
 * @classdesc Building Class
 */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const property = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!property.find((e) => e === 'evacuationWarningMessage')) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this._sqft = sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newSqft;
  }

  get sqft() {
    return this._sqft;
  }
}
