const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const { expect } = chai;

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with a success message when inout is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  }));
});
