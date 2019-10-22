const express = require('express');
const { getRandomJoke, getSpecificJoke } = require('../joke-maker');

const router = express.Router();

router.get('/specific/:jokeId', (req, res) => {
    const jokeId = parseInt(req.params.jokeId) - 1;
    res.send(getSpecificJoke(jokeId));
});

router.get('/random', (req, res) => {
    res.send(getRandomJoke());
});

module.exports = router;
