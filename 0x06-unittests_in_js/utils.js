/**
 * This module contains utility function.
 *
 * @module Utils
 */

const Utils = {
  /**
   * This function takes a type and two numbers as arguments, rounds them, and performs
   * the specified operation.
   * @param {string} type - The type of operation (SUM, SUBTRACT, DIVIDE).
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number|string} - The result of the operation or 'Error' if division by zero.
   */
  calculateNumber: (type, a, b) => {
    if (
      typeof type !== 'string'
      || typeof a !== 'number'
      || typeof b !== 'number'
    ) {
      throw new TypeError('Invalid argument type.');
    }

    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      default:
        throw new TypeError('Invalid operation type.');
    }
  },
};

module.exports = Utils;
