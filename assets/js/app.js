// Button eventlistener
let button = document.getElementById('button');
button.addEventListener('click', function() {
    okLetsGo();
});

// Plays the audio
function okLetsGo() {
    let audio = document.getElementById("audio");
    audio.currentTime = 0;
    audio.cloneNode(true).play(); // Play next audio on click without waiting for the current audio to finish
}