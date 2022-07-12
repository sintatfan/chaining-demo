let xoff = 0.0;
let xincrement = 0.01;

function setup() {
    createCanvas(600, 600);
    background(250);
    noStroke();
}

function draw() {
    // Create an alpha blended background
    fill(250, 10);
    rect(0, 0, width, height);

    //let n = random(0,width);  // Try this line instead of noise

    // Get a noise value based on xoff and scale
    // it according to the window's width
    let n = noise(xoff) * width;

    // With each cycle, increment xoff
    xoff += xincrement;

    // Draw the ellipse at the value produced by perlin noise
    fill(100);
    ellipse(n, height / 2, 96, 96);
}