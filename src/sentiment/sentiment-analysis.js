const Sentiment = require('sentiment');
const { sanitizeStr } = require('../helpers/helpers');

const sentimentInstance = new Sentiment();

const analyzeJokes = jokesArr => {
    jokesArr.forEach(joke => {
        const res = sentimentInstance.analyze(sanitizeStr(joke.Joke));
        delete res.tokens;
        delete res.words;
        delete res.positive;
        delete res.negative;
        joke.sentiment = res;
    });

    return jokesArr;
};

const getWords = jokesArr => {
    let finalObj = {};
    jokesArr.forEach(joke => {
        joke.sentiment.calculation.forEach(calc => {
            finalObj = Object.assign(finalObj, calc);
        });
    });

    return finalObj;
};

module.exports = {
    analyzeJokes,
    getWords
};

