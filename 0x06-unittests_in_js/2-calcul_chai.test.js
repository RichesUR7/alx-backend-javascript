const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return the sum of the rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 2.4, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', -2.4, -3.7)).to.equal(-6);
    });
  });

  describe('subtract', () => {
    it('should return the subtraction of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 2.4, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', -2.4, -3.7)).to.equal(2);
    });
  });

  describe('divide', () => {
    it('should return the division of the rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 4.6, 2, 2)).to.equal(2.5);
      expect(calculateNumber('DIVIDE', -4.6, -2.2)).to.equal(2.5);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });

  describe('invalid type', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(TypeError);
      expect(() => calculateNumber('ADD', 1.4, 4.5)).to.throw(TypeError);
    });
  });

  describe('invalid arguments', () => {
    it('should throw an error for invalid arguments', () => {
      expect(() => calculateNumber('1.4, 4.5')).to.throw(TypeError);
      expect(() => calculateNumber('SUM', '1.4', 4.5)).to.throw(TypeError);
      expect(() => calculateNumber('SUM', 1.4, '4.5')).to.throw(TypeError);
    });
  });
});
