var express = require('express')
var app = express()
var fs = require('fs')
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/js', express.static(__dirname + '/public/src/js'));
app.use('/css', express.static(__dirname + '/public/src/css'));
app.use('/images', express.static(__dirname + '/public/image'))
app.use('/audio', express.static(__dirname + '/public/audio'))
app.use('/patterns', express.static(__dirname + '/public/patterns'))

app.get('/reload', function(req, res){
  res.sendFile(__dirname + '/pages/index.html');
});

app.get('/ar', function(req, res){
  res.sendFile(__dirname + '/pages/ar.html');
});

  app.get('/login', function(req, res){
  res.sendFile(__dirname + '/pages/login.html');
});

app.get('/vr', function(req, res){
  res.sendFile(__dirname + '/pages/vr.html');
});

io.on('connection', (socket) => {
	console.log('New user connected')

    socket.on('reload_emit', (data) => {
    	socket.broadcast.emit('reload_broadcast', {username : socket.username})
    })
})

http.listen(8080, function(){
  console.log('listening on *: 8080');
});

