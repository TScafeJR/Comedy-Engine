const express = require('express');
const cookieParser = require('cookie-parser');

const jokeRoutes = require('../routes/joke-routes');

const app = express();
app.use(cookieParser());

app.use('/joke', jokeRoutes);

module.exports = app;
