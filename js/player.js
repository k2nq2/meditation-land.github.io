
document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');
  for(var i = 0; i < audios.length; i++) {
    if(audios[i] != e.target) {
      audios[i].pause();
    }
  }
}, true);