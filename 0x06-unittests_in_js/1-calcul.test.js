const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return the sum of the rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 2.4, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', -2.4, -3.7), -6);
    });
  });

  describe('subtract', () => {
    it('should return the subtraction of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.4, -3.7), 2);
    });
  });

  describe('divide', () => {
    it('should return the division of the rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 4.6, 2.2), 2.5);
      assert.strictEqual(calculateNumber('DIVIDE', -4.6, -2.2), 2.5);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -0.2), 'Error');
    });
  });

  describe('invalid type', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), TypeError);
      assert.throws(() => calculateNumber('ADD', 1.4, 4.5), TypeError);
    });
  });

  describe('invalid arguments', () => {
    it('should throw an error for invalid arguments', () => {
      assert.throws(() => calculateNumber(1.4, 4.5), TypeError);
      assert.throws(() => calculateNumber('SUM', '1.4', 4.5), TypeError);
      assert.throws(() => calculateNumber('SUM', 1.4, '4.5'), TypeError);
    });
  });
});
