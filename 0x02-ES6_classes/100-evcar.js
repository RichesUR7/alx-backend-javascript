import Car from './10-car';

/**
 *
 * @class
 * @classdesc EVCar extends from Car class
 */
export default class EVCar extends Car {
  /**
   * @param {String} brand
   * @param {String} motor
   * @param {String} color
   * @param {String} range
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new Car();
  }
}
