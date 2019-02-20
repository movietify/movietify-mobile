var express = require('express');
var app = express();

app.get('/v1/auth/signup',function(req,res){
    res.send('Sign up page.');
});

app.get('/v1/auth/signin',function(req,res){
    res.send('Sign in page.');
});

app.get('/v1/movie/all/:userID',function(req,res){
    res.send('All movies and '+ req.params.userID +' is logged in.');
});

app.get('/v1/movie/category/:name',function(req,res){
    res.send(req.params.name + ' category.');
});

app.get('/v1/movie/list/add/:userID/:movieID/:listID',function(req,res){
    res.send('Add List -> userID is '+ req.params.userID + ' movieID is '+ req.params.userID + ' listID is ' + req.params.listID);
});

app.get('/v1/movie/list/delete/:userID/:movieID/:listID',function(req,res){
    res.send('Delete List -> userID is '+ req.params.userID + ' movieID is '+ req.params.userID + ' listID is ' + req.params.listID);
});

app.get('/v1/movie/search/:word',function(req,res){
    res.send('Search '+ req.params.word + ' movie or list');
});

app.get('/v1/movie/details/:movieID',function(req,res){
    res.send('The details of the movie with' + req.params.movieID + 'id.');
});

app.get('/v1/movie/list/create/:userID/:listName',function(req,res){
    res.send(req.params.userID + ' user id user has created '+ req.params.listName +' list.');
});

app.get('/v1/profile/info/:userID',function(req,res){
    res.send(req.params.userID + ' user profile info.');
});

app.get('/v1/profile/list/all/:userID',function(req,res){
    res.send(req.params.userID + ' user\'s all song lists.');
});

app.get('/v1/profile/update/:userID',function(req,res){
    res.send(req.params.userID + ' user update profile.');
});

app.get('/v1/movie/list/favorite/add/:userID/:listID',function(req,res){
    res.send(req.params.userID + ' user add favorites '+ req.params.listID +' list.');
});

app.get('/v1/auth/logout',function(req,res){
    res.send('Good bye !');
});


app.listen(3000,function() {
    console.log("Server is live on port 3000.");
});