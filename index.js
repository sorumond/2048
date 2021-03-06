'use strict';

let values = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

let score = 0;

randomValueStart();

render();

function moveLeft() {
    let isMoved = false;
    for (let i = 0; i < values.length; i++) {
        let positionNumber = 1;
        let isMarged = false;
        while (positionNumber <= 3) {
            if (values[i][positionNumber] === 0) {
                positionNumber++;
            } else if (positionNumber > 0 && values[i][positionNumber - 1] === values[i][positionNumber] && !isMarged) {
                values[i][positionNumber - 1] *= 2;
                values[i][positionNumber] = 0;
                score += values[i][positionNumber - 1];
                isMarged = true;
                positionNumber++;
                isMoved = true;
            } else if (positionNumber > 0 && values[i][positionNumber - 1] === 0 && positionNumber <= 3) {
                values[i][positionNumber - 1] = values[i][positionNumber];
                values[i][positionNumber] = 0;
                positionNumber--;
                isMoved = true;
            } else if (positionNumber > 0 && values[i][positionNumber - 1] && isMarged) {
                positionNumber++;
                isMarged = false;
            } else {
                positionNumber++;
            }
        }
    }
    if (isMoved) {
        addRandomValue();
        render();
    }
    if (loseCheck()) {
        renderLoose();
    }
}

function moveUp() {
    let isMoved = false;
    for (let k = 0; k < values.length; k++) {
        let positionNumber = 1;
        let isMarged = false;
        while (positionNumber <= 3) {
            if (values[positionNumber][k] === 0) {
                positionNumber++;
            } else if (positionNumber > 0 && values[positionNumber - 1][k] === values[positionNumber][k] && !isMarged) {
                values[positionNumber - 1][k] *= 2;
                values[positionNumber][k] = 0;
                score += values[positionNumber - 1][k];
                isMarged = true;
                positionNumber++;
                isMoved = true;
            } else if (positionNumber > 0 && values[positionNumber - 1][k] === 0 && positionNumber <= 3) {
                values[positionNumber - 1][k] = values[positionNumber][k];
                values[positionNumber][k] = 0;
                positionNumber--;
                isMoved = true;
            } else if (positionNumber > 0 && values[positionNumber - 1] && isMarged) {
                positionNumber++;
                isMarged = false;
            } else {
                positionNumber++;
            }
        }
    }

    if (isMoved) {
        addRandomValue();
        render();
    }
    if (loseCheck()) {
        renderLoose();
    }
}

function moveRight() {
    let isMoved = false;
    for (let i = 0; i < values.length; i++) {
        let positionNumber = 2;
        let isMarged = false;
        while (positionNumber >= 0) {
            if (values[i][positionNumber] === 0) {
                positionNumber--;
            } else if (positionNumber < 3 && values[i][positionNumber] === values[i][positionNumber + 1] && !isMarged) {
                values[i][positionNumber + 1] *= 2;
                values[i][positionNumber] = 0;
                score += values[i][positionNumber + 1];
                isMarged = true;
                positionNumber--;
                isMoved = true;
            } else if (positionNumber < 3 && values[i][positionNumber + 1] === 0 && positionNumber >= 0) {
                values[i][positionNumber + 1] = values[i][positionNumber];
                values[i][positionNumber] = 0;
                positionNumber++;
                isMoved = true;
            } else if (positionNumber < 3 && isMarged && values[i][positionNumber + 1]) {
                positionNumber--;
                isMarged = false;
            } else {
                positionNumber--;
            }
        }
    }


    if (isMoved) {
        addRandomValue();
        render();
    }
    if (loseCheck()) {
        renderLoose();
    }
}

function moveDown() {
    let isMoved = false;
    for (let k = 0; k < values.length; k++) {
        let positionNumber = 2;
        let isMarged = false;
        while (positionNumber >= 0) {
            if (values[positionNumber][k] === 0) {
                positionNumber--;
            } else if (positionNumber < 3 && values[positionNumber][k] === values[positionNumber + 1][k] && !isMarged) {
                values[positionNumber + 1][k] *= 2;
                values[positionNumber][k] = 0;
                score += values[positionNumber + 1][k];
                isMarged = true;
                positionNumber--;
                isMoved = true;
            } else if (positionNumber < 3 && values[positionNumber + 1][k] === 0 && positionNumber >= 0) {
                values[positionNumber + 1][k] = values[positionNumber][k];
                values[positionNumber][k] = 0;
                positionNumber++;
                isMoved = true;
            } else if (positionNumber < 3 && isMarged && values[positionNumber + 1][k]) {
                positionNumber--;
                isMarged = false;
            } else {
                positionNumber--;
            }

        }
    }

    if (isMoved) {
        addRandomValue();
        render();
    }
    if (loseCheck()) {
        renderLoose();
    }
}
