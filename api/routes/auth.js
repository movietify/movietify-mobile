const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const User    = require('../models/user');

//Handle incoming POST requests to /auth
router.post('/signup', (req, res, next) => {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        picture: req.body.picture,
        city: req.body.city,
        country: req.body.country
    });

    user.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

    res.end(JSON.stringify(req.body));
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