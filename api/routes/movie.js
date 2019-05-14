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

router.put('/list/add/:userID/:movieName/:listID', (req, res, next) => {
    const user_id = req.params.userID;
    const list_id = req.params.listID;
    const movie_name = req.params.movieName;

    List.findOneAndUpdate({"_id": list_id, "user_id": user_id}, {$push : {"movies_ids" : movie_name}})
    .exec()
    .then(function (list) {
        res.send(list);
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
    });
});

router.put('/list/delete/:userID/:movieID/:listID', function(req, res, next){
    const user_id = req.params.userID;
    const list_id = req.params.listID;
    const movie_id = req.params.movieID;

    List.findOneAndUpdate({"_id": list_id, "user_id": user_id}, {$pull : {"movies_ids" : movie_id}})
    .exec()
    .then(function (list) {
        res.send(list);
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
    });
});

router.get('/search/:word', function(req, res, next){
    const word = req.params.word;

    Movies.find({"title": { $regex:  word, $options: 'gi'}})
    .exec()
    .then(function (movie) {
        res.send(movie);
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
    });
});

router.get('/details/:movieID', function(req, res, next){
    const movie_id = req.params.movieID;

    Movies.find({"_id": movie_id})
    .exec()
    .then(function (movie) {
        res.send(movie);
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
    });
});

router.post('/list/create', function(req, res, next){
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

router.put('/list/favorite/add/:userID/:listID', function(req, res, next){
    const user_id = req.params.userID;
    const list_id = req.params.listID;
    
    List.findOneAndUpdate({"_id": list_id}, {$push : {"followers_ids" : user_id}})
    .exec()
    .then(function (list) {
        res.send({state : "True"});
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
    });
});

router.put('/list/favorite/delete/:userID/:listID', function(req, res, next){
    const user_id = req.params.userID;
    const list_id = req.params.listID;
    
    List.findOneAndUpdate({"_id": list_id}, {$pull : {"followers_ids" : user_id}})
    .exec()
    .then(function (list) {
        res.send({state : "True"});
    })
    .catch(err => {
        res.status(500).json({error : "Error"});
    });
});

module.exports = router;