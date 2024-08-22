const Utils = require('./utils');

/**
 * This function calculates the total payment amount by summing the total
 * amount and total shipping.
 * It uses the 'calculateNumber' function from the Utils module to perform
 * the calculation.
 *
 * @param {number} totalAmount - The total amount of the items.
 * @param {number} totalShipping - The total shipping cost.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalPay = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalPay}`);
};

module.exports = sendPaymentRequestToApi;
