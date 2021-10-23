window.addEventListener('load', function() {
    console.log('All assets are loaded')
});

const butt = document.querySelector("#stop-glitch");
var glitchText = document.querySelector(".clean-text");
var contentDiv = document.querySelector(".content");
var song = document.querySelector("#myAudio");
var isPlaying = false;

butt.addEventListener('click', function(){
    console.log("button clicked!");
    glitchText.classList.toggle('text');
    if (glitchText.className == 'clean-text'){
        this.textContent = "Play a song!";
    }
    else { 
        this.textContent = "Pause the song";
    }
    isPlaying ? myAudio.pause() : myAudio.play();
});

myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};
