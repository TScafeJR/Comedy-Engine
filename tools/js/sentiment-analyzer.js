const { analyzeJokes } = require('../../src/sentiment/sentiment-analysis');
const jokesArr = require('../../data/json/shortjokes');
const fs = require('fs');

const jokesCopy = jokesArr.slice();

const modifiedJokes = analyzeJokes(jokesCopy);

fs.writeFileSync('data/json/sentiment-jokes.json', JSON.stringify(modifiedJokes, null, 2));
