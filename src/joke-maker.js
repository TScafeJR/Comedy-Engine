const CronJob = require('cron').CronJob;
const jokes = require('../data/json/shortjokes');

const randomJoke = () => {
    const selectedJoke = jokes[Math.floor(Math.random()*jokes.length)];
    return selectedJoke.Joke;
};

const jokeMaker = new CronJob({
    cronTime: '*/5 * * * *',
    onTick: randomJoke,
    onComplete: (msg) => {
        console.error(`Cron job to make the joke terminated: ${msg}`);
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});

module.exports = {
    jokeMaker,
    randomJoke
};

