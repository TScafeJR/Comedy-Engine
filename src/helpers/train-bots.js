const brain = require('brain.js');
const fs = require('fs');

const trainManicheanBot = () => {
    const config = {
        iterations: 30000000,
        errorThresh: 0.005,
        log: true,
        logPeriod: 10000,
        layers: [32],
        hiddenLayers: [16, 8, 4, 2]
    };

    const trainingData = [
        { input: { score: 0 }, output: { evil: 1 } },
        { input: { score: .1 }, output: { 'very bad': 1 } },
        { input: { score: .2 }, output: { bad: 1 } },
        { input: { score: .3 }, output: { 'pretty bad': 1 } },
        { input: { score: .4 }, output: { 'slightly bad': 1 } },
        { input: { score: .5 }, output: { neutral: 1 } },
        { input: { score: .6 }, output: { 'slightly good': 1 } },
        { input: { score: .7 }, output: { 'pretty good': 1 } },
        { input: { score: .8 }, output: { good: 1 } },
        { input: { score: .9 }, output: { 'very good': 1 } },
        { input: { score: 1 }, output: { godly: 1 } }
    ];

    const network = new brain.NeuralNetwork();
    network.train(trainingData, config);

    fs.writeFileSync('data/bots/manichean-bot.json', JSON.stringify(network, null, 2));
    console.log('Training complete');
};

trainManicheanBot();

module.exports = {
    trainManicheanBot
};
