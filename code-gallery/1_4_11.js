/*
    Breathing + Random Color
 */
let ballR = 100;
let Plus = true;

let r, g, b = 0;

function setup() {
    createCanvas(600, 600);
    background(250);
    noStroke();

    randColor();
}

function draw() {
    fill(250, 30);
    rect(0, 0, width, height);

    start();
}

function start() {
    fill(r, g, b, 100);
    noStroke();
    circle(width / 2, height / 2, ballR);

    if (Plus) {
        ballR++;
        if (ballR == 200) {
            Plus = false;
            randColor();
        }
    }

    if (!Plus) {
        ballR--;
        if (ballR == 100) {
            Plus = true;
            randColor();
        }
    }
}

function randColor() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}