/*
    Breathing
 */
let ballR = 100;
let Plus = true;

function setup() {
    createCanvas(600, 600);
    background(250);
    noStroke();
}

function draw() {
    fill(250, 10);
    rect(0, 0, width, height);

    start();
}

function start() {
    fill('rgba(150,150,150,0.1)');
    noStroke();
    circle(width / 2, height / 2, ballR);

    if (Plus) {
        ballR++;
        if (ballR == 200) {
            Plus = false;
        }
    }

    if (!Plus) {
        ballR--;
        if (ballR == 100) {
            Plus = true;
        }
    }
}