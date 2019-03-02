const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const List = require('../models/list');

router.get('/info/:userID',function(req, res, next){
    res.send(req.params.userID + ' user profile info.');
});

router.get('/list/all/:userID',function(req, res, next){
    const id = req.params.userID;

    List.find({"user_id": id}).then(function (list) {
        res.send(list);}
    );
    /*List.find(id)
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error : err});
        });*/
});

router.put('/update',function(req, res, next){
    res.end(JSON.stringify(req.body));
});

module.exports = router;