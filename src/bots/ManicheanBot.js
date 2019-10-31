const brain = require('brain.js');
const Sentiment = require('sentiment');
const { manicheanBot } = require('../helpers/load-bots');
const jokes = require('../../data/json/sentiment-jokes');
const { normalize, getMaxAndMin, sanitizeStr } = require('../helpers/helpers');

class ManicheanBot {
    respondToJoke(joke) {
        const jokesScoresArr = jokes.map(x => x.sentiment.score).slice(0, 10000);
        const { max, min } = getMaxAndMin(jokesScoresArr);

        const sentimentInstance = new Sentiment();

        const jokeScore = sentimentInstance.analyze(sanitizeStr(joke)).score;
        const normalizedScore = normalize(jokeScore, min, max);

        const guess = brain.likely({ score: normalizedScore }, manicheanBot);
        return `That was a ${guess} joke.`;
    }
}

module.exports = ManicheanBot;
