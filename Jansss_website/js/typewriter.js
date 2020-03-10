var i = 0;
var txt = 'online marketing consultant';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter_text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}