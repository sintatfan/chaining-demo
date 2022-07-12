let rad = 36; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 3.8; // Speed of the shape
let yspeed = 3.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
    createCanvas(600, 600);
    background(250);
    noStroke();
    ellipseMode(RADIUS);
    // Set the starting position of the shape
    xpos = width / 2;
    ypos = height / 2;
}

function draw() {
    // Create an alpha blended background
    fill(250, 64);
    rect(0, 0, width, height);

    // Update the position of the shape
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (xpos > width - rad || xpos < rad) {
        xdirection *= -1;
    }
    if (ypos > height - rad || ypos < rad) {
        ydirection *= -1;
    }

    // Draw the ellipse at the value produced by perlin noise
    fill(100);
    ellipse(xpos, ypos, rad, rad);
}