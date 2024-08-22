/**
 * This function returns a promise that resolves with a success message when the input is true.
 *
 * @module getPaymentTokenFromAPI
 * @param {boolean} success - A boolean value representing the success of API request.
 * @returns {Promise} - A promise that resolves with a success message when the input is true.
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve) => {
  if (success) {
    resolve({ data: 'Successful response from the API' });
  }
});

module.exports = getPaymentTokenFromAPI;
