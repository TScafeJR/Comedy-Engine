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

    describe('randomJoke', () => {
        it('should return a string', () => {
            const joke = jokeMakerModule.getRandomJoke();
            expect(joke).to.be.a('string');
        });

        it('should return a joke that is in the array of provided jokes', () => {
            const joke = jokeMakerModule.getRandomJoke();
            expect(jokesArr.includes(joke)).to.be.true;
        });
    });

    describe('specificJoke', () => {
        it('should return a string', () => {
            const joke = jokeMakerModule.getSpecificJoke(0);
            expect(joke).to.be.a('string');
        });

        it('should return a joke that is in the array of provided jokes', () => {
            const joke = jokeMakerModule.getSpecificJoke(0);
            expect(jokesArr.includes(joke)).to.be.true;
        });

        it('should be able to return a joke when the index is out of bound', () => {
            const jokesLength = testJokes.length;
            const joke = jokeMakerModule.getSpecificJoke(Math.floor(jokesLength * Math.random()));
            expect(joke).to.be.a('string');
            expect(jokesArr.includes(joke)).to.be.true;
        });
    })
});

