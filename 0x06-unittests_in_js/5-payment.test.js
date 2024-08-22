const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  // store the console.log spy
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" for inputs 100 ans 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" for inputs 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });

  it('should use Utils.calculateNumber and log the correct total', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be
      .true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the stubbed method
    calculateNumberStub.restore();
  });
});
