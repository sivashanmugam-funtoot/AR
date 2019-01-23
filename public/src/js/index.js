var socket = io.connect('http://localhost:8080')

var reload_button = document.getElementById("reload-button")


 //Emit message
reload_button.addEventListener('click', function(){
  socket.emit('reload_emit', {})
})
 


 //Listen on new_message
socket.on("reload_broadcast", (data) => {
    location.reload();
})
