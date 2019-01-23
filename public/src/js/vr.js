var socket = io.connect('https://gallary-rummysiva.c9users.io/')

 //Listen on new_message
socket.on("reload_broadcast", (data) => {
    location.reload();
})



AFRAME.registerComponent('play-audio-on-click-deer', {
    init: function () {
      var el = this.el;  // <a-box>
      console.log('sivashanmugam')
      console.log(el)
      el.addEventListener('click', function () {
        var audioIns = new Audio("/audio/deer.mp3");
        audioIns.play();
      });
    } 
  });
  
AFRAME.registerComponent('play-audio-on-click-wolf', {
    init: function () {
      var el = this.el;  // <a-box>
      console.log('sivashanmugam')
      console.log(el)
      el.addEventListener('click', function () {
        var audioIns = new Audio("/audio/wolf.mp3");
        audioIns.play();
      });
    } 
  });
  
AFRAME.registerComponent('play-audio-on-click-dog', {
    init: function () {
      var el = this.el;  // <a-box>
      console.log('sivashanmugam')
      console.log(el)
      el.addEventListener('click', function () {
        var audioIns = new Audio("/audio/dog.mp3");
        audioIns.play();
      });
    } 
  });
  
AFRAME.registerComponent('play-audio-on-click-sheep', {
    init: function () {
      var el = this.el;  // <a-box>
      console.log('sivashanmugam')
      console.log(el)
      el.addEventListener('click', function () {
        var audioIns = new Audio("/audio/sheep.mp3");
        audioIns.play();
      });
    } 
  });
  
  
AFRAME.registerComponent('play-audio-on-click-lion', {
    init: function () {
      var el = this.el;  // <a-box>
      console.log('sivashanmugam')
      console.log(el)
      el.addEventListener('click', function () {
        var audioIns = new Audio("/audio/lion.mp3");
        audioIns.play();
      });
    } 
  });