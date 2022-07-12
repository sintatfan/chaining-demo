function setup() {
    createCanvas(600, 600, WEBGL);
}

function draw() {
    background(250);
    drawBackground();
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

function drawHuman() {
    ambientLight(100, 100, 100);
    pointLight(255, 255, 255, 0, -300, 200);

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

}

function drawBackground() {
    planet(0, 0, 380);
}

var colorsBlue = "04080f-507dbc-a1c6ea-bbd1ea-dae3e5".split("-").map(a => "#" + a)
var colorsRed = "fe7f2d-fcca46-a1c181-619b8a-333".split("-").map(a => "#" + a)

function planet(x, y, r = 30) {
    noStroke();
    push()
    translate(x, y)
    for (var i = 0; i < 50; i++) {
        let xx = noise(i * 2, frameCount / 100) * r * noise(i) * 2
        let ang = noise(i, frameCount / 800, 500) * 10 * PI
        let rr = noise(i, 500, frameCount / 50) * 50 * (15 / (sqrt(xx) + 1))

        let cc2 = colorsRed[int(noise(frameCount / 10, i) * colorsBlue.length) % colorsBlue.length]
        fill(cc2)

        push()
        rectMode(CENTER)
        translate(xx * cos(ang * 2), xx * sin(ang * 2))
        rotate(ang * 2)
        rotate(i)
        rect(0, 0, sqrt(rr) * sin(frameCount / 10 + i) * 2)
        pop()

        lastX = xx
        lastR = rr
        lastAng = ang

        if (random() < 0.5) {
            push()
            stroke(cc2)
            noFill()
            arc(0, 0, xx * 2, xx * 2, ang * 2, ang * 2 + noise(i, frameCount / 200))
            pop()
        }
    }
    pop()
}
