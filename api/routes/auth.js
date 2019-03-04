const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User    = require('../models/user');

//Handle incoming POST requests to /auth
router.post('/signup', (req, res, next) => {
    User.find({email: req.body.email , username: req.body.username})
    .exec()
    .then(user => {
        if(user.length >= 1) {
            return res.status(409).json({
                message: 'Mail or username exist'
            });
        } else {
            bcrypt.hash(req.body.password,10,(err, hash) => {
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        username: req.body.username,
                        email: req.body.email,
                        password: hash
                    });
                    user
                        .save()
                        .then(result => {
                            console.log(result);
                            res.status(201).json({
                                message: 'User created'
                            });
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            });
                        });
                    }   
                });
        }
    })
});

router.post('/signin', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({"username": username, "password": password}, function(err, user){
        if(err) {
            return res.status(500).send();
        }

        if(!user) {
            return res.status(404).send({state : false});
        }

        return res.status(200).send({state : true});
    });
        
});

router.get('/logout',function(req, res, next){
    res.send('Good bye !');
});

module.exports = router;