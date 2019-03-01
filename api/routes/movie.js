const express = require('express');
const router = express.Router();

router.get('/all/:userID', (req, res, next) => {
    res.send('All movies and '+ req.params.userID +' is logged in.');
});

router.get('/category/:name', (req, res, next) => {
    res.send(req.params.name + ' category.');
});

router.post('/list/add/:userID/:movieID/:listID', (req, res, next) => {
    res.status(200).json({
        message: "Add movie in a list.",
        user_id: req.params.userID,
        movie_id: req.params.movieID,
        list_id: req.params.listID
    });
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

router.post('/list/create/:userID/:listName',function(req, res, next){
    res.status(200).json({
        message: "Create list.",
        user_id: req.params.userID,
        list_name: req.params.listName
    });
});

router.post('/list/favorite/add/:userID/:listID',function(req, res, next){
    res.status(200).json({
        message: "Add list in favorite.",
        user_id: req.params.userID,
        list_id: req.params.listID
    });
});

module.exports = router;