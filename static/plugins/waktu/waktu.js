// window.setTimeout("waktu()", 1000);

// function waktu() {
//     var waktu = new Date();
//     setTimeout("waktu()", 1000);
//     document.getElementById("jam").innerHTML = waktu.getHours();
//     document.getElementById("menit").innerHTML = waktu.getMinutes();
//     document.getElementById("detik").innerHTML = waktu.getSeconds();
// }

$(document).ready(function () {
    function clock() {
        var now = new Date();
        var secs = ('0' + now.getSeconds()).slice(-2);
        var mins = ('0' + now.getMinutes()).slice(-2);
        var hr = now.getHours();
        var Time = hr + ":" + mins + ":" + secs;
        document.getElementById("waktu").innerHTML = Time;
        requestAnimationFrame(clock);
    }

    requestAnimationFrame(clock);
});