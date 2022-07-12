function setup() {
    createCanvas(600, 600, WEBGL);
}

function draw() {
    background(250);

    const k = 0;
    angleMode(DEGREES);

    translate(-320, 0, 0);
    for (let i = 0; i < 100; i++) {
        translate(
            10,
            sin((frameCount/4 + i) * 10) * 20,
            0
        );
        push();
        sphere(8, 6, 4);
        pop();
    }
}
