const cloneCarSymbol = Symbol('cloneCar');

/**
 *
 * @class
 * @classdesc define a car class
 */
export default class Car {
  /**
   * @param {String} brand
   * @param {String} motor
   * @param {String} color
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    /* Define the Symbol property as non-enumerable */
    Object.defineProperty(this, cloneCarSymbol, {
      value: true,
      enumerable: false,
    });
  }

  cloneCar() {
    if (this[cloneCarSymbol] === true) {
      return new this.constructor();
    }
    return null;
  }
}
