const CronJob = require('cron').CronJob;
const jokes = require('../data/json/shortjokes');

const getRandomJoke = () => {
    const selectedJoke = jokes[Math.floor(Math.random()*jokes.length)];
    return selectedJoke.Joke;
};

const getSpecificJoke = index => {
    index = Math.abs(index);
    return jokes[index % jokes.length].Joke;
};

const jokeMaker = new CronJob({
    cronTime: '*/5 * * * *',
    onTick: getRandomJoke,
    onComplete: msg => {
        console.error(`Cron job to make the joke terminated: ${msg}`);
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});

module.exports = {
    jokeMaker,
    getRandomJoke,
    getSpecificJoke
};

