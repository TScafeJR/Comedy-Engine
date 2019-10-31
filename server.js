const { getRandomJoke } = require('./src/joke-maker');
const { respondToJoke } = require('./src/bots/manichean-bot');

const port = process.env.PORT || '3000';
const app = require('./src/routes/app');

app.listen(port, () => {
    console.log('Starting the joke engine 🎭');
    console.log(`The joke engine is listening on port ${port}!`);
});

const firstJoke = getRandomJoke();
console.log(firstJoke);
console.log('Training bots');
console.log('Manichean Bot is responding to the first joke');
console.log(respondToJoke(firstJoke));
