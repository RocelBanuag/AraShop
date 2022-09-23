var clicked = false;
let img = document.getElementById('h-logo');
let img2 = document.getElementById('h-logo2');
function nightMode () {
    var elem = document.body;
if (!clicked) {
    clicked = true;;
    document.getElementById('day-night-mode').innerText = 'Night Off'
    document.getElementById('day-night-mode').style.backgroundColor = 'white';
    document.getElementById('day-night-mode').style.color = 'black';
    img.src = 'assets/logos/logo-white.png';
    img2.src = 'assets/logos/logo-white.png';
    document.getElementById('footer').style.backgroundColor = '#0E0E0E';
    document.getElementById('headings').style.backgroundColor = '#0E0E0E';
    document.getElementById('txt-night-1').style.color = 'white';
    document.getElementById('txt-night-2').style.color = 'white';
    document.getElementById('txt-night-3').style.color = 'white';
    document.getElementById('txt-night-4').style.color = 'white';
    document.getElementById('txt-night-5').style.color = 'white';
} else {
    clicked = false
    document.getElementById('day-night-mode').innerText = 'Night On'
    document.getElementById('day-night-mode').style.backgroundColor = 'black';
    document.getElementById('day-night-mode').style.color = 'white';
    img.src = 'assets/logos/logo.png';
    img2.src = 'assets/logos/logo.png';
    document.getElementById('headings').style.backgroundColor = 'white';
    document.getElementById('txt-night-1').style.color = 'black';
    document.getElementById('txt-night-2').style.color = 'black';
    document.getElementById('txt-night-3').style.color = 'black';
    document.getElementById('txt-night-4').style.color = 'black';
    document.getElementById('txt-night-5').style.color = 'black';
}

    elem.classList.toggle("dark-mode");
}