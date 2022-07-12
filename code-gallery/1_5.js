function setup() {
    createCanvas(600, 600, WEBGL);
}

function draw() {
    background(250);

    rotateY(frameCount);
    sphere(180, 6, 4);
}
