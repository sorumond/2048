'use strict';

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 39) {
        moveRight();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 37) {
        moveLeft();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
        moveUp();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 40) {
        moveDown();
    }
});

let reset = document.querySelector('.game__new-game');

reset.addEventListener('click', newGame);
