let xoff = 0.0;
let xincrement = 0.01;
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
    let n = random(0, width);
    let size = random(20, 100);

    xoff += xincrement;
    strokeWeight(4);
    stroke(196, 211, 223, random(60, 100));
    ellipse(n, random(0, height), size, size);

    filter(BLUR, 1);

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