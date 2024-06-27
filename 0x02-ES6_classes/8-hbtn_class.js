/**
 *
 * @class
 * @classdesc HolbertonClass
 */
export default class HolbertonClass {
  /**
   * @param {number} size
   * @param {string} location
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
