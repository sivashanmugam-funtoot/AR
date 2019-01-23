var express = require('express')
var fs = require('fs')
var https = require('http')
var app = express()

app.use('/js', express.static(__dirname + '/public/src/js'));
app.use('/css', express.static(__dirname + '/public/src/css'));
app.use('/images', express.static(__dirname + '/public/image'))
app.use('/audio', express.static(__dirname + '/public/audio'))
app.use('/patterns', express.static(__dirname + '/public/patterns'))



  app.get('/ar', function(req, res){
    res.sendFile(__dirname + '/pages/ar.html');
  });
  
    app.get('/login', function(req, res){
    res.sendFile(__dirname + '/pages/login.html');
  });



app.listen(8080, function () {
  console.log('Example app listening')
})

