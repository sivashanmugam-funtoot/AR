var socket = io.connect('https://gallary-rummysiva.c9users.io/')

 //Listen on new_message
socket.on("reload_broadcast", (data) => {
    location.reload();
})



AFRAME.registerComponent('play-audio-on-click', {
    init: function () {
      var el = this.el;  // <a-box>
      console.log('sivashanmugam')
      console.log(el)
      el.addEventListener('click', function () {
        var audioIns = new Audio("https://shivashanmugam.github.io/Web-Audio-API-With-visualizer/vogel-dreamwave.mp3");
        audioIns.play();
        


      });
    } 
  });