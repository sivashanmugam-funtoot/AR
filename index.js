var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()

app.use('/js', express.static(__dirname + '/public/src/js'));
app.use('/css', express.static(__dirname + '/public/src/css'));
app.use('/images', express.static(__dirname + '/public/image'))
app.use('/audio', express.static(__dirname + '/public/audio'))
app.use('/patterns', express.static(__dirname + '/public/patterns'))


app.get('/', function(req, res){
    res.sendFile(__dirname + '/pages/test.html');
  });

  app.get('/alphabets', function(req, res){
    res.sendFile(__dirname + '/pages/alphabets.html');
  });

  app.get('/faces', function(req, res){
    res.sendFile(__dirname + '/pages/faces.html');
  });

  app.get('/animals', function(req, res){
    res.sendFile(__dirname + '/pages/animals.html');
  });

  app.get('/characters', function(req, res){
    res.sendFile(__dirname + '/pages/characters.html');
  });

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

