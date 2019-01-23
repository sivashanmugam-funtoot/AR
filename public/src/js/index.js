var socket = io.connect('https://gallary-rummysiva.c9users.io/')

var reload_button = document.getElementById("reload-button")


 //Emit message
reload_button.addEventListener('click', function(){
  socket.emit('reload_emit', {})
})
 


 //Listen on new_message
socket.on("reload_broadcast", (data) => {
    location.reload();
})
