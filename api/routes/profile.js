const express = require('express');
const router = express.Router();

router.get('/info/:userID',function(req, res, next){
    res.send(req.params.userID + ' user profile info.');
});

router.get('/list/all/:userID',function(req, res, next){
    res.send(req.params.userID + ' user\'s all song lists.');
});

router.put('/update',function(req, res, next){
    res.end(JSON.stringify(req.body));
});

module.exports = router;