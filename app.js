const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const authRoutes = require('./api/routes/auth');
const movieRoutes = require('./api/routes/movie');
const profileRoutes = require('./api/routes/profile');

app.use(morgan('dev'));
//Only support simple bodies for URL encoded data
app.use(bodyParser.urlencoded({extended: false}));
//Extract json data for easily readable to us
app.use(bodyParser.json());

// Routes which should handle request
app.use('/auth', authRoutes);
app.use('/movie', movieRoutes);
app.use('/profile', profileRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;