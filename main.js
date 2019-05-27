'use strict';

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getAmountFreeCells() {
    let freeCellsArray = [];

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (values[i][j] === 0) {
                freeCellsArray.push([i,j]);
            }
        }
    }
    return freeCellsArray;
}

function addRandomValue() {
    let freeCells = getAmountFreeCells();
    const count = freeCells.length;
    const randomPosition = randomInt(0, count);
    Math.random() > 0.9 ?  values[freeCells[randomPosition][0]][freeCells[randomPosition][1]] = 4 : values[freeCells[randomPosition][0]][freeCells[randomPosition][1]] = 2;
}

function loseCheck() {
    let gotMove = false;
    let zeroCheck = false;
    let isLose = true;
    for (let i = 0; i < values.length; i++) {
        for (let k = 0; k < values.length; k++) {
            if (values[i][k] === 0) {
                zeroCheck = true;
            }
        }
    }
    if (!zeroCheck) {
        for (let i = 0; i < values.length; i++) {
            for (let k = 0; k < values.length; k++) {
                let rightCell = values[i][k + 1];
                let leftCell = values[i][k - 1];
                let upCell;
                let downCell;
                if (values[i - 1]) {
                     upCell = values[i - 1][k];
                } else {
                     upCell = 0;
                }
                if (values[i + 1]) {
                     downCell = values[i + 1][k];
                } else {
                     downCell = 0;
                }
                let currentCell = values[i][k];
                if (currentCell === leftCell || currentCell === rightCell || currentCell === upCell || currentCell === downCell) {
             gotMove = true;
                }
            }
        }
    }
    if (zeroCheck || gotMove) {
        isLose = false;
    }
    return isLose;
}

function randomValueStart() {
    let startAddedCount = 0;
    while (startAddedCount < 2) {
        let randomI = randomInt(0, 4);
        let randomK = randomInt(0, 4);
        if (values[randomI][randomK] === 0) {
            startAddedCount++;
            Math.random() > 0.9 ? values[randomI][randomK] = 4 : values[randomI][randomK] = 2;
        }
    }
}

const render = () => {
    let html = ``;
    for (let i = 0; i < values.length; i++) {
        for (let k = 0; k < values.length; k++) {
            if (values[i][k] > 2048) {
                html += `<div class="game__squares game__squares_2048">${values[i][k]}</div>`
            } else if (values[i][k] !== 0) {
                html += `<div class="game__squares game__squares_${values[i][k]}">${values[i][k]}</div>`
            } else {
                html += `<div class="game__squares"></div>`
            }
        }
    }
    document.querySelector('.game__field').innerHTML = html;
    document.querySelector('.game__score').innerHTML = `               <span class="game__score-title">
                   Score
               </span>
                <span class="game__score-num">
                    ${score}
                </span>`
};

const renderLoose = function () {
    document.querySelector('.game__field').innerHTML = `<div class="loose">
            <span class="loose__loose">You loose</span>
            <input type="button" class="loose__new-game" value="New Game">
        </div>`;
    let loosReset = document.querySelector('.loose__new-game');
    loosReset.addEventListener('click', newGame);
};

function newGame() {
    values = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    score = 0;
    randomValueStart();
    render();
}
