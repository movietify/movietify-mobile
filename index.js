var express = require('express');
var app = express();


app.post('/v1/auth/signup',function(req,res){
    res.status(200).json({
        message: "Sign up page."
    });
});

app.get('/v1/auth/signin',function(req,res){
    res.status(200).json({
        message: "Sign in page."
    });
});

app.get('/v1/movie/all/:userID',function(req,res){
    res.send('All movies and '+ req.params.userID +' is logged in.');
});

app.get('/v1/movie/category/:name',function(req,res){
    res.send(req.params.name + ' category.');
});

app.post('/v1/movie/list/add/:userID/:movieID/:listID',function(req,res){
    res.status(200).json({
        message: "Add movie in a list.",
        user_id: req.params.userID,
        movie_id: req.params.movieID,
        list_id: req.params.listID
    });
});

app.delete('/v1/movie/list/delete/:userID/:movieID/:listID',function(req,res){
    res.status(200).json({
        message: "Delete list.",
        user_id: req.params.userID,
        movie_id: req.params.movieID,
        list_id: req.params.listID
    });
});

app.get('/v1/movie/search/:word',function(req,res){
    res.send('Search '+ req.params.word + ' movie or list');
});

app.get('/v1/movie/details/:movieID',function(req,res){
    res.send('The details of the movie with' + req.params.movieID + 'id.');
});

app.post('/v1/movie/list/create/:userID/:listName',function(req,res){
    res.status(200).json({
        message: "Create list.",
        user_id: req.params.userID,
        list_name: req.params.listName
    });
});

app.get('/v1/profile/info/:userID',function(req,res){
    res.send(req.params.userID + ' user profile info.');
});

app.get('/v1/profile/list/all/:userID',function(req,res){
    res.send(req.params.userID + ' user\'s all song lists.');
});

app.put('/v1/profile/update/:userID',function(req,res){
    res.status(200).json({
        message: "Update user profile.",
        user_id: req.params.userID
    });
});

app.post('/v1/movie/list/favorite/add/:userID/:listID',function(req,res){
    res.status(200).json({
        message: "Add list in favorite.",
        user_id: req.params.userID,
        list_id: req.params.listID
    });
});

app.get('/v1/auth/logout',function(req,res){
    res.send('Good bye !');
});


app.listen(3000,function() {
    console.log("Server is live on port 3000.");
});