const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movies = require('../models/movies');
const List = require('../models/list');

router.get('/all/:userID', (req, res, next) => {
    res.send('All movies and '+ req.params.userID +' is logged in.');
});

router.get('/category/:name', (req, res, next) => {
    res.send(req.params.name + ' category.');
});

router.post('/list/add', (req, res, next) => {
    res.end(JSON.stringify(req.body));
});

router.delete('/list/delete/:userID/:movieID/:listID',function(req, res, next){
    res.status(200).json({
        message: "Delete list.",
        user_id: req.params.userID,
        movie_id: req.params.movieID,
        list_id: req.params.listID
    });
});

router.get('/search/:word',function(req, res, next){
    res.send('Search '+ req.params.word + ' movie or list');
});

router.get('/details/:movieID',function(req, res, next){
    res.send('The details of the movie with' + req.params.movieID + 'id.');
});

router.post('/list/create',function(req, res, next){
    const list = new List({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        user_id: req.body.user_id,
        movie_id: req.body.movie_id
    });
    list .save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.end(JSON.stringify(req.body));
});

router.post('/list/favorite/add',function(req, res, next){
    res.end(JSON.stringify(req.body));
});

module.exports = router;