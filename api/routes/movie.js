const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movies = require('../models/movies');
const List = require('../models/list');
const checkAuth = require('../middleware/check-auth');

router.get('/all', (req, res, next) => {

    Movies.find()
    .exec()
    .then(function (movie) {
        res.send(movie);
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
    });
});

router.get('/category/:name', (req, res, next) => {
    const category = req.params.name;

    Movies.find({"genre": { $regex:  category, $options: 'gi'}})
    .exec()
    .then(function (movie) {
        res.send(movie);
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
    });
});

router.post('/list/add', checkAuth, (req, res, next) => {
    res.end(JSON.stringify(req.body));
});

router.delete('/list/delete/:userID/:movieID/:listID', checkAuth, function(req, res, next){
    res.status(200).json({
        message: "Delete list.",
        user_id: req.params.userID,
        movie_id: req.params.movieID,
        list_id: req.params.listID
    });
});

router.get('/search/:word', checkAuth, function(req, res, next){
    res.send('Search '+ req.params.word + ' movie or list');
});

router.get('/details/:movieID', checkAuth, function(req, res, next){
    res.send('The details of the movie with' + req.params.movieID + 'id.');
});

router.post('/list/create', checkAuth, function(req, res, next){
    const list = new List({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        user_id: req.body.user_id
    });
    list .save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.end(JSON.stringify(req.body));
});

router.post('/list/favorite/add', checkAuth, function(req, res, next){
    res.end(JSON.stringify(req.body));
});

module.exports = router;