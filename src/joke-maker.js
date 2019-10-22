const CronJob = require('cron').CronJob;

const makeTheJoke = () => {
    console.log(`I told a funny`)
};

const jokeMaker = new CronJob({
    cronTime: '*/5 * * * *',
    onTick: makeTheJoke,
    onComplete: (msg) => {
        logger.error(`Cron job to make the joke terminated: ${msg}`);
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});

module.exports = {
    jokeMaker
}

