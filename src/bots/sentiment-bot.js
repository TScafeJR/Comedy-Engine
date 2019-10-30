const brain = require('brain.js');
const data = require('../../data/json/calculated-words');
const { normalize, getMaxAndMin } = require('../helpers/helpers');
const fs = require('fs');

const dataCopy = Object.assign(data, {});

const config = {
    iterations: 30000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 5,
    layers: [20, 20],
    hiddenLayers: [8, 4, 2, 1],
    learningRate: 0.3
};

const trainingData = [];

const { min, max } = getMaxAndMin(Object.values(dataCopy));

Object.keys(dataCopy).forEach(word => {
    dataCopy[word] = normalize(dataCopy[word], min, max);
});

Object.keys(dataCopy).forEach(word => {
    trainingData.push({
        input: word,
        output: data[word]
    });
});

const network = new brain.recurrent.LSTM();
const bot = network.train(trainingData, config);

fs.writeFileSync('bots/sentiment-bot.json', bot);

module.exports = {
  wordBot: network
};
