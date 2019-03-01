const express = require('express');
const router = express.Router();

router.get('/info/:userID',function(req, res, next){
    res.send(req.params.userID + ' user profile info.');
});

router.get('/list/all/:userID',function(req, res, next){
    res.send(req.params.userID + ' user\'s all song lists.');
});

router.put('/update/:userID',function(req, res, next){
    res.status(200).json({
        message: "Update user profile.",
        user_id: req.params.userID
    });
});

module.exports = router;