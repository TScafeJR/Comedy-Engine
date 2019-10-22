const express = require('express');
const { randomJoke } = require('../joke-maker');

const router = express.Router();

router.use('/random', (req, res) => {
    res.send(randomJoke());
});

module.exports = router;
