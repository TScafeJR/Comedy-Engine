const brain = require('brain.js');
const data = require('../../data/json/calculated-words');
const { normalize, getMaxAndMin } = require('../helpers/helpers');
const fs = require('fs');

const dataCopy = Object.assign(data, {});

const config = {
    iterations: 30000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 10,
    layers: [4],
    hiddenLayers: [4, 2]
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

fs.writeFileSync(`bots/sentiment-bot-${process.env.PORT}.json`, bot);

module.exports = {
  wordBot: network
};
