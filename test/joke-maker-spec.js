const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire').noCallThru();
const testJokes = require('./test-data/test-jokes');

const { expect } = chai;
chai.use(sinonChai);

describe('Joke Maker', () => {
    const cronStub = sinon.stub().returns('Some cron stub');
    const jokesArr = testJokes.map(x => x.Joke);

    const jokeMakerModule = proxyquire('../src/joke-maker', {
        'cron': { CronJob: cronStub },
        '../data/json/shortjokes': testJokes
    });

    it('should return an array of jokes', () => {
        const joke = jokeMakerModule.randomJoke();
        expect(jokesArr.includes(joke)).to.be.true;
    });
});

