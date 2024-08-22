const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded whole numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 3.0), 5);
  });

  it("should round down b's fractional number", () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    assert.strictEqual(calculateNumber(5.0, 3.4), 8);
  });

  it("should round down a and b's fractional numbers", () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    assert.strictEqual(calculateNumber(2.4, 3.4), 5);
  });

  it("should round down a's fractional number", () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
    assert.strictEqual(calculateNumber(2.4, 5.0), 7);
  });

  it("should round up b's fractional numbers", () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
    assert.strictEqual(calculateNumber(3.0, 2.6), 6);
  });

  it("should round up a and b's fractional numbers", () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
    assert.strictEqual(calculateNumber(3.5, 4.5), 9);
  });

  it("should round up a's fractional numbers", () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
    assert.strictEqual(calculateNumber(4.6, 3.0), 8);
  });

  it("should round down a and b's floating point fractional numbers with trailing 9's", () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    assert.strictEqual(calculateNumber(4.499999, 5.499999), 9);
  });

  it("should round up a and b's floating point fractional numbers with trailing 1's", () => {
    assert.strictEqual(calculateNumber(2.500001, 3.500001), 7);
    assert.strictEqual(calculateNumber(4.500001, 5.500001), 11);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.6, -1.6), -4);
    assert.strictEqual(calculateNumber(-2.4, 2.4), 0);
  });

  it('should handle a mix of negative and positive numbers correctly', () => {
    assert.strictEqual(calculateNumber(-2.6, 2.6), 0);
    assert.strictEqual(calculateNumber(3.5, -3.6), 0);
  });

  it('should handle zeros correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.4, 0.5), 1);
  });

  it('should throw an error if either argument is not a number', () => {
    assert.throws(() => calculateNumber('2', 3), TypeError);
    assert.throws(() => calculateNumber(2, '3'), TypeError);
    assert.throws(() => calculateNumber(null, 3), TypeError);
    assert.throws(() => calculateNumber(2, undefined), TypeError);
  });
});
