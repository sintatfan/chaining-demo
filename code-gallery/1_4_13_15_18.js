function setup() {
    createCanvas(600, 600, WEBGL);
}

function draw() {
    background(220);
    drawHuman();
}

function drawHead() {
    fill(255);
    noStroke();

    push();
    rotateX(Math.PI*((1+sin(frameCount/10))/24));

    // Left eye
    push();
    translate(-15, 10, 50);
    sphere(8, 50, 50);

    // Eyebrow
    translate(-10, -20, 0);
    scale(4, 0.5, 1);
    rotateZ(PI*0.05);
    box(10);
    pop();

    // Right eye
    push();
    translate(15, 10, 50);
    sphere(8, 50, 50);

    // Eyebrow
    translate(10, -20, 0);
    scale(4, 0.5, 1);
    rotateZ(PI*-0.05);
    box(10);
    pop();

    // Mouth
    push();
    translate(0, 30, 50);
    scale(3.5, 0.5, 1);
    box(10);
    pop();

    fill(255, 200, 200)

    // Left Cheek
    push();
    translate(-30, 25, 50);
    sphere(5, 50, 50);
    pop();

    // Right Cheek
    push();
    translate(30, 25, 50);
    sphere(5, 50, 50);
    pop();

    fill(100);
    sphere(50, 50, 50);
    pop();
}

function drawBody() {
    translate(0, 50);
    const numOfBall = 6;
    const ballRadius = 10;
    const margin = 10;
    for(let i=0; i<numOfBall; i++) {
        push();
        translate(0, i*(ballRadius*2));
        sphere(ballRadius, 200, 200);
        pop();

    }
}

function drawHands() {
    const radius = 80;
    const numOfBall = 36;
    const ballRadius = 8;
    const initialMove = (radius)/2
    const numOfAffectBall = 10;

    translate(0, 80, radius);

    for(let i=0; i<numOfBall; i++) {
        push();
        const angle = (2*PI/numOfBall)*i;
        translate(
            sin(angle)*radius,
            sin((frameCount + i) * 0.1) * 10,
            cos(angle)*radius
        );
        sphere(ballRadius, 200, 200);
        pop();

    }
}

function drawLegs() {
    const radius = 100;
    const numOfBall = 8;
    const ballRadius = 10;
    const initialMove = (radius)/2
    const numOfAffectBall = 10;

    translate(0, 160);
    for(let i=0; i<numOfBall; i++) {
        const angle = (2*PI/numOfBall)*i;

        push();
        translate(i*5, i*(ballRadius*2));
        sphere(ballRadius, 200, 200);
        pop();

        push();
        translate(-i*5, i*(ballRadius*2));
        sphere(ballRadius, 200, 200);
        pop();

    }
}

function drawTorus () {
    fill(255, 200, 200)
    const radius = 80;
    const angle = frameCount/10%(2*PI);
    translate(
        sin(angle)*radius,
        130,
        cos(angle)*radius
    );
    rotateX(PI/2);
    torus(100, 10, 24, 24);
}

function drawHuman() {
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    ambientLight(100, 100, 100);
    pointLight(255, 255, 255, 0, -300, 200);

    background(255);
    fill(200, 200, 200);
    translate(0, -100);

    push();
    drawHead();
    pop();

    push();
    drawBody();
    pop();

    push();
    drawHands();
    pop();

    push();
    drawLegs();
    pop();

    push();
    drawTorus();
    pop();

}