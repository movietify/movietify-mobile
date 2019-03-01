var express = require('express');
var app = express();
const authRoutes = require('./api/routes/auth');
const movieRoutes = require('./api/routes/movie');
const profileRoutes = require('./api/routes/profile');

app.use('/auth', authRoutes);
app.use('/movie', movieRoutes);
app.use('/profile', profileRoutes);


module.exports = app;