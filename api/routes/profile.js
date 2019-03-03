const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const List = require('../models/list');

router.get('/info/:userID',function(req, res, next){
    res.send(req.params.userID + ' user profile info.');
});

router.get('/list/all/:userID',function(req, res, next){
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

router.put('/update',function(req, res, next){
    res.end(JSON.stringify(req.body));
});

module.exports = router;