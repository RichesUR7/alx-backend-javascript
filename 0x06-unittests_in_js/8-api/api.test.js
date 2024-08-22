const request = require('request');
const { expect } = require('chai');

describe('basic Integration testing - Index Page', () => {
  const baseURL = 'http://localhost:7865';

  it('should responde correctly on GET /', () => new Promise((done) => {
    request.get(`${baseURL}/`, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
