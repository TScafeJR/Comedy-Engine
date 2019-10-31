const express = require('express');
const bodyParser = require('body-parser');

const { getRandomJoke, getSpecificJoke } = require('../joke-maker');
const { manicheanBot } = require('../routes/route-bots');
const { sanitizeStr } = require('../helpers/helpers');

const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: true
}));

const constructResponse = input => {
    return {
        joke: input,
        manicheanBotResponse: manicheanBot.respondToJoke(input)
    };
};

router.get('/input', (req, res) => {
    if (!req.body.joke)
        return res.status(406).send({
            error: 'Missing proper input in the request body. Need a value in the joke parameter.'
        });

    const joke = sanitizeStr(req.body.joke);
    const botResponse = constructResponse(joke);
    res.send(botResponse);
});

router.get('/specific/:jokeId', (req, res) => {
    const jokeId = parseInt(req.params.jokeId) - 1;
    const joke = getSpecificJoke(jokeId);
    const botResponse = constructResponse(joke);
    res.send(botResponse);
});

router.get('/random', (req, res) => {
    const joke = getRandomJoke();
    const botResponse = constructResponse(joke);

    res.send(botResponse);
});

module.exports = router;
