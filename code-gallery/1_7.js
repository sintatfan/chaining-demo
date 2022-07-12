const radius = 260;

function setup() {
    createCanvas(600, 600);
    background(250);
    stroke(0, 0, 0, 15);
}

function draw() {
    translate(40, 40);
    randomChord();
    randomChord();
}

function randomChord() {
    let angle1 = random(0, 2 * PI);
    let xpos1 = radius + radius * cos(angle1);
    let ypos1 = radius + radius * sin(angle1);

    let angle2 = random(0, 2 * PI);
    let xpos2 = radius + radius * cos(angle2);
    let ypos2 = radius + radius * sin(angle2);

    line(xpos1, ypos1, xpos2, ypos2);
}