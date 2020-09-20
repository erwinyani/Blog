document.getElementById('mute').style.display = 'none';

var x = document.getElementById("audioMusic");
function playMusic() {
    x.play();
    document.getElementById('un-mute').style.display = 'none';
    document.getElementById('mute').style.display = 'inline-block';
}
function pauseMusic() {
    x.pause();
    document.getElementById('mute').style.display = 'none';
    document.getElementById('un-mute').style.display = 'inline-block';
}