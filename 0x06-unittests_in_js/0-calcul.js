/**
 * This function takes two numbers as arguments, rounds them, and returns their sum.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of the rounded numbers.
 */
const calculateNumber = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers.');
  }

  return Math.round(a) + Math.round(b);
};

module.exports = calculateNumber;
