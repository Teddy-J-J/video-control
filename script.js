document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
  
    window.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        // Scroll down
        video.play();
      } else {
        // Scroll up
        video.pause();
      }
    });
});