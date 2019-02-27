const express = require('express');
const router = express.Router();

router.post('/signup', (req, res, next) => {
    res.status(200).json({
        message: 'Sign up page.'
    });
});

router.get('/signin', (req, res, next) => {
    res.status(200).json({
        message: 'Sign in page.'
    });
});

app.get('/logout',function(req, res, next){
    res.send('Good bye !');
});

module.exports = router;