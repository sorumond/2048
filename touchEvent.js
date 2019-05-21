let gameField = document.querySelector('.game__field');

gameField.addEventListener('touchstart', touchStart, false);
gameField.addEventListener('touchend', touchMove, false);

let xDown = 0;
let yDown = 0;

function touchStart(evt) {
    const firstTouch = evt.touches[0];
     xDown = firstTouch.clientX;
     yDown = firstTouch.clientY;
};

function touchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.changedTouches[0].clientX;
    let yUP = evt.changedTouches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUP;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            moveLeft();
        } else {
            moveRight();
        }
    } else {
        if (yDiff > 0) {
            moveUp();
        } else {
            moveDown();
        }
    }
    xDown = 0;
    yDown = 0;
};
