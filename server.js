const { getRandomJoke } = require('./src/joke-maker');

const port = process.env.PORT || '3000';
const app = require('./src/routes/app');

app.listen(port, () => {
    console.log('Starting the joke engine 🎭');
    console.log(`The joke engine is listening on port ${port}!`);
    console.log(getRandomJoke());
});
