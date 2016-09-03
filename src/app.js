'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates')

app.get('/', function(req, res){
  res.render('index.pug');
});

app.get('/blog/:title?', function(req, res){
  var title = req.params.title;
  if (title === undefined){
    res.status(503);
    res.send("this page is under construction");
  } else {
  var post = posts[title] || {};
  res.render('post', {post:post});
  }
});

app.listen(3000, function(){
  console.log("The frontend server is running port 3000!")
});
