const request = require('request');
const { expect } = require('chai');

describe('integration Testing', () => {
  const baseURL = 'http://localhost:7865';

  describe('index Page', () => {
    it('should respond correctly on GET /', () => new Promise((done) => {
      request.get(`${baseURL}/`, (error, response, body) => {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    }));
  });

  describe('cart Page', () => {
    it('should respond with status code 200 when :id is a number', () => new Promise((done) => {
      request.get(`${baseURL}/cart/123`, (error, response, body) => {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    }));

    it('should respond with status code 404 when :id is not a number', () => new Promise((done) => {
      request.get(`${baseURL}/cart/abc`, (error, response) => {
        if (error) return done(error);
        expect(response.statusCode).to.equal(404);
        done();
      });
    }));
  });

  describe('login Endpoint', () => {
    it('should respond with a welcome message for POST /login', () => new Promise((done) => {
      const options = {
        url: `${baseURL}/login`,
        method: 'POST',
        json: {
          userName: 'mohannad',
        },
      };

      request(options, (error, response, body) => {
        if (error) return done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome mohannad');
        done();
      });
    }));
  });

  describe('available Payments Endpoint', () => {
    it('should respond with payment methods for GET /available_payments', () => new Promise((done) => {
      request.get(
        `${baseURL}/available_payments`,
        (error, response, body) => {
          if (error) return done(error);
          expect(response.statusCode).to.equal(200);
          expect(JSON.parse(body)).to.be.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          done();
        },
      );
    }));
  });
});
