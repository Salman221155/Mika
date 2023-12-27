
    document.addEventListener("DOMContentLoaded", function() {
      document.body.classList.remove("not-loaded");
      var audio = document.getElementById("myAudio");
      audio.play();
    });

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  