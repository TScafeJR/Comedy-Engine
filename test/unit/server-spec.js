const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire').noCallThru();

const { expect } = chai;
chai.use(sinonChai);

describe('Server', () => {
    const randomJokeStub = sinon.stub().returns('Some random joke');
    const consoleStub = sinon.stub(console, 'log');

    proxyquire('../../server', {
        './src/joke-maker': {
            getRandomJoke: randomJokeStub
        },
        './src/routes/app': {
            listen: port => { console.log(`test listening on some port ${port}`); }
        }
    });

    it('starts with the correct log message as expected', () => {
        const testPort = process.env.PORT || '3000';
        expect(consoleStub).to.have.been.calledWith(`test listening on some port ${testPort}`);
    });
});
