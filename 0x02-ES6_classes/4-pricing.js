import Currency from './3-currency';

/**
 *
 * @class
 * @classdesc Pricing
 */
export default class Pricing {
  /**
   * @param {number} amount
   * @param {Currency} currency
   */
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    this._currency = newCurrency;
  }

  /**
   * @returns {string} Price attributes
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  /**
   * @param {number} amount
   * @param {number} conversionRate
   * @returns {number}
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
