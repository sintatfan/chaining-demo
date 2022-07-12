let xoff = 0.0;
let xincrement = 0.01;
let max_distance;

function setup() {
    createCanvas(600, 600);
    background(100);
    noStroke();
    max_distance = dist(0, 0, width, height);
}

function draw() {
    background(100);
    //let n = random(0,width);  // Try this line instead of noise

    // Get a noise value based on xoff and scale
    // it according to the window's width
    let x = noise(xoff) * width;
    let y = noise(xoff, xoff) * height;

    // With each cycle, increment xoff
    xoff += xincrement;

    // Draw the ellipse at the value produced by perlin noise
    fill(250);
    superShape(x, y);

    ball1();
}

function superShape(x, y) {
    for (let i = 0; i <= width; i += 20) {
        for (let j = 0; j <= height; j += 20) {
            let size = dist(x, y, i, j);
            size = (size / max_distance) * 128;
            ellipse(i, j, size, size);
        }
    }
}

function ball1() {
    let x = noise(xoff / 2, xoff) * width;
    let y = noise(xoff / 3) * height;

    // Create an alpha blended background
    fill(250, 10);
    rect(0, 0, width, height);

    // Draw the ellipse at the value produced by perlin noise
    fill(0,0,100);
    ellipse(x, y, 96, 96);
}