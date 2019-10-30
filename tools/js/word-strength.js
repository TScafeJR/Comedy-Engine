const { getWords } = require('../../src/sentiment/sentiment-analysis');
const jokesObj = require('../../data/json/sentiment-jokes');
const fs = require('fs');

const jokesCopy = Object.assign(jokesObj, {});

const modifiedJokes = getWords(jokesCopy);

fs.writeFileSync('data/json/calculated-words.json', JSON.stringify(modifiedJokes, null, 2));

