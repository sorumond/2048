'use strict';

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function addRandomValue() {
    let added = false;
    while (added === false) {
        let randomI = randomInt(0, 4);
        let randomK = randomInt(0, 4);
        console.log(randomI, randomK);
        if (values[randomI][randomK] === 0) {
            added = true;
            Math.random() > 0.9 ? values[randomI][randomK] = 4 : values[randomI][randomK] = 2;
        }
    }
    console.log(values);
}

function loseCheck() {
    let isLose = true;
    for (let i = 0; i < values.length; i++) {
        for (let k = 0; k < values.length; k++) {
            if (values[i][k] === 0) {
                isLose = false;
            }
        }
    }
    return isLose
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
