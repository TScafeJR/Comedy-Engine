const express = require('express');
const cookieParser = require('cookie-parser');

const jokeRoutes = require('./joke-routes');
const manicheanRoutes = require('./manichean-routes');

const app = express();
app.use(cookieParser());

app.use('/joke', jokeRoutes);
app.use('/manichean', manicheanRoutes);

app.use('/', (req, res) => {
    const doesNotExistMessage = 'Sorry pal, this page does not exist';
    res.status(404).send(doesNotExistMessage);
});

module.exports = app;
