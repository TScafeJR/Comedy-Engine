const express = require('express');
const cookieParser = require('cookie-parser');

const jokeRoutes = require('../routes/joke-routes');

const app = express();
app.use(cookieParser());

app.use('/joke', jokeRoutes);

app.use('/', (req, res) => {
    const doesNotExistMessage = 'Sorry pal, this page does not exist';
    res.status(404).send(doesNotExistMessage)
});

module.exports = app;
