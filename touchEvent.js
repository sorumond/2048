let gameField = document.querySelector('.game__field');

gameField.addEventListener('touchstart', touchStart, false);
gameField.addEventListener('touchmove', touchMove, false);
gameField.addEventListener('touchend', touchUp, false);

let xDown = 0;
let yDown = 0;

function touchStart(evt) {
    const firstTouch = evt.touches[0];
     xDown = firstTouch.clientX;
     yDown = firstTouch.clientY;
    evt.preventDefault();
};

function touchMove(evt) {
    evt.preventDefault();
}

function touchUp(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.changedTouches[0].clientX;
    let yUP = evt.changedTouches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUP;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 10) {
            moveLeft();
        } else if (xDiff < -10) {
            moveRight();
        }
    } else {
        if (yDiff > 10) {
            moveUp();
        } else if (yDiff < -10){
            moveDown();
        }
    }
    xDown = 0;
    yDown = 0;
    evt.preventDefault();
};
