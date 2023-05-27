const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');
var MianImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');



if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('show');
    });
}

smallimg[0].onclick = function () {
    MianImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MianImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MianImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MianImg.src = smallimg[3].src;
}
