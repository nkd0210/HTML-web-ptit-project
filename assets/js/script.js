var open = document.querySelector('.open-btn');
var modal = document.querySelector('.modal');
var xBtn = document.querySelector('#x_btn');
var closeBtn = document.querySelector('.footer-btn');

open.onclick = function () {
    modal.classList.remove('hide');
}

xBtn.onclick = function () {
    modal.classList.add('hide');
}

closeBtn.onclick = function () {
    modal.classList.add('hide');
}


