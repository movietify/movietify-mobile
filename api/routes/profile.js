const express = require('express');
const router = express.Router();
const List = require('../models/list');
const User = require('../models/user');
const checkAuth = require('../middleware/check-auth');

router.get('/info/:userID', checkAuth, function(req, res, next){

    User.find({"_id": req.params.userID})
        .exec()
        .then(function (users) {
            res.send(users);
        })
        .catch(err => {
            res.status(500).json({error : "Hata"});
        });
});

router.get('/list/all/:userID', checkAuth, function(req, res, next){
    const id = req.params.userID;

    List.find({"user_id": id})
        .exec()
        .then(function (list) {
            res.send(list);
        })
        .catch(err => {
            res.status(500).json({error : "Hata"});
        });
});

router.put('/update/:userID', checkAuth, function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.userID}, req.body)
    .then(function(){
        User.findOne({_id: req.params.userID})
        .then(function(users){
            res.send(users);
        });
    });
});

module.exports = router;