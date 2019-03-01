const express = require('express');
const router = express.Router();

//Handle incoming POST requests to /auth
router.post('/signup', (req, res, next) => {
    res.end(JSON.stringify(req.body));
});

router.get('/signin', (req, res, next) => {
    res.status(200).json({
        message: 'Sign in page.'
    });
});

router.get('/logout',function(req, res, next){
    res.send('Good bye !');
});

module.exports = router;