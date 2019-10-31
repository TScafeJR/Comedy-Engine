const brain = require('brain.js');
const manicheanBotData = require('../../data/bots/manichean-bot');

const manicheanBot = new brain.NeuralNetwork().fromJSON(manicheanBotData);

module.exports = {
    manicheanBot
};
