const express = require('express');
const router = express.Router();
const List = require('../models/list');
const User = require('../models/user');
const checkAuth = require('../middleware/check-auth');

router.get('/info/:userID', function(req, res, next){

    User.find({"_id": req.params.userID})
        .exec()
        .then(function (users) {
            res.send(users);
        })
        .catch(err => {
            res.status(500).json({error : "Error"});
        });
});

router.get('/list/all/:userID', function(req, res, next){
    const id = req.params.userID;

    List.find({"user_id": id})
        .exec()
        .then(function (list) {
            res.send(list);
        })
        .catch(err => {
            res.status(500).json({error : "Error"});
        });
});

router.get('/list/details/:listID', function(req, res, next){
    const id = req.params.listID;
    const movies = [];

    List.find({"_id": id},{"movies_ids":1})
        .exec()
        .then(function (list) {
            movies.push(list[0]["movies_ids"]);
            res.send(movies);
        })
        .catch(err => {
            res.status(500).json({error : "Error"});
        });
});

router.put('/update/:userID', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.userID}, req.body)
        .then(function(){
            User.findOne({_id: req.params.userID})
                .then(function(users){
                    res.send(users);
                });
        })
        .catch(err => {
            res.status(500).json({error : "Error"});
        });
});

module.exports = router;