window.onload = function() {
    setTimeout(function() {
      document.getElementById("loader").remove();
    }, 2000); // Remove loader after 2 seconds (adjust as needed)
  }

  const audio = document.getElementById('myAudio');
  let tapCount = 0;
  
  document.addEventListener('click', () => {
    tapCount++;
  
    if (tapCount === 2) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      tapCount = 0; // Reset the tap count
    }
  });