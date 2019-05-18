'use strict';

let values = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

randomValueStart();

function docs() {
}

const render = () => {
    for (let i = 0; i < values.length; i++) {
        for (let k = 0; k < values.length; k++) {
            document.querySelectorAll('.game__field').innerHTML += `<div class="game__squares game__squares_${values[i][k]}">${values[i][k]}</div>`
        }
    }

    document.querySelector('.game__field').innerHTML = `
        <div class="game__squares game__squares_2">${values[0][0]}</div>
        <div class="game__squares game__squares_4">${values[0][1]}</div>
        <div class="game__squares game__squares_8">${values[0][2]}</div>
        <div class="game__squares game__squares_16">${values[0][3]}</div>

        <div class="game__squares game__squares_32">${values[1][0]}</div>
        <div class="game__squares game__squares_64">${values[1][1]}</div>
        <div class="game__squares game__squares_128">${values[1][2]}</div>
        <div class="game__squares game__squares_256">${values[1][3]}</div>

        <div class="game__squares game__squares_512">${values[2][0]}</div>
        <div class="game__squares game__squares_1024">${values[2][1]}</div>
        <div class="game__squares game__squares_2048">${values[2][2]}</div>
        <div class="game__squares">${values[][]}</div>

        <div class="game__squares">${values[][]}</div>
        <div class="game__squares">${values[][]}</div>
        <div class="game__squares">${values[][]}</div>
        <div class="game__squares">${values[][]}</div>
    `
}

render();

console.log(values);

function moveLeft() {
    let isMoved = false;
    for (let i = 0; i < values.length; i++) {
        let positionNumber = 1;
        let isMarged = false;
        while (positionNumber <= 3) {
            if(values[i][positionNumber] === 0) {
                positionNumber++;
            } else if (positionNumber > 0 && values[i][positionNumber - 1] === values[i][positionNumber] && !isMarged) {
                values[i][positionNumber - 1] *= 2;
                values[i][positionNumber] = 0;
                isMarged = true;
                positionNumber++;
                isMoved = true;
            } else if (positionNumber > 0 && values[i][positionNumber - 1] === 0 && positionNumber <= 3) {
                values[i][positionNumber -1] = values[i][positionNumber];
                values[i][positionNumber] = 0;
                positionNumber--;
                isMoved = true;
            }   else if (positionNumber > 0 && values[i][positionNumber - 1] && isMarged) {
                positionNumber++;
                isMarged = false;
            } else {
                positionNumber++;
            }
        }
    }
    if (loseCheck()) {
        console.log('You loose');
        return;
    }
    addRandomValue()
}

function moveUp() {
    let isMoved = false;
    for (let k = 0; k < values.length; k++) {
        let positionNumber = 1;
        let isMarged = false;
        while(positionNumber <= 3) {
           if (values[positionNumber][k] === 0) {
               positionNumber++;
           } else if (positionNumber > 0 && values[positionNumber -1][k] === values[positionNumber][k] && !isMarged) {
               values[positionNumber - 1][k] *= 2;
               values[positionNumber][k] = 0;
               isMarged = true;
               positionNumber++;
               isMoved = true;
           } else if(positionNumber > 0 && values[positionNumber - 1][k] === 0 && positionNumber <= 3) {
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
    if (loseCheck()) {
        console.log('You loose');
        return;
    }
    if (isMoved) {
        addRandomValue()
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

    if (loseCheck()) {
        console.log('You loose');
        return;
    }
    if (isMoved) {
        addRandomValue()
    }
}

function moveDown() {
    let isMoved = false;
    for (let k = 0; k < values.length; k++) {
        let positionNumber = 2;
        let isMarged = false;
        while (positionNumber >= 0) {
            // debugg0er;
            if (values[positionNumber][k] === 0) {
                positionNumber--;
            } else if (positionNumber < 3 && values[positionNumber][k] === values[positionNumber + 1][k] && !isMarged) {
                values[positionNumber + 1][k] *= 2;
                values[positionNumber][k] = 0;
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
    if (loseCheck()) {
        console.log('You loose');
        return;
    }
    if (isMoved) {
        addRandomValue();
    }
}
