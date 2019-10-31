const { getRandomJoke } = require('./src/joke-maker');
const ManicheanBot = require('./src/bots/ManicheanBot');

const port = process.env.PORT || '3000';
const app = require('./src/routes/app');

app.listen(port, () => {
    console.log('Starting the joke engine 🎭');
    console.log(`The joke engine is listening on port ${port}!`);
    const manicheanBot = new ManicheanBot();

    const firstJoke = getRandomJoke();
    console.log(firstJoke);
    console.log('The Manichean Bot is responding to the first joke:');
    console.log(manicheanBot.respondToJoke(firstJoke));
});


