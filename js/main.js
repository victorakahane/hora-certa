let msg = document.querySelector('#message');
let photo = document.querySelector('#image');
let getTime = new Date();
let time = getTime.getHours();
let title = document.querySelector('#title');


title.innerHTML += `${time} horas e ${getTime.getMinutes()} minutos`;

if (time >= 6 && time < 12)  {
    msg.innerHTML += 'do café da manhã!';
    document.body.style.background = '#22aaaa';
    photo.setAttribute('src', 'images/cafe-da-manha.jpg');
}
else if (time >= 12 && time < 16) {
    msg.innerHTML += 'do almoço!';
    document.body.style.background = '#9fa732';
    photo.setAttribute('src', 'images/almoco.jpg');
}
else if (time >= 16 && time < 19) {
    msg.innerHTML += 'do café da tarde!'; 
    document.body.style.background = '#ba7c25';
    photo.setAttribute('src', 'images/cafe-da-tarde.jpg');
}
else if (time >= 19 && time < 24) {
    msg.innerHTML += 'do jantar!';
    photo.setAttribute('src', 'images/jantar.jpg');
}
else {
    msg.innerHTML += 'de dormir!';
    document.body.style.background = '#242423';
    photo.setAttribute('src', 'images/dormir.jpg');
}