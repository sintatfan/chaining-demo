let angle = 3;
let reverse = false;

function setup() {
    createCanvas(600, 600);
    frameRate(10);
}

function draw() {
    background(250);
    second2();
}

function second2(){
    if(angle < 40 && !reverse){
        angle++;
        reverse = false;
    }else{
        angle--;
        reverse = true;
    }

    if(angle < 4){
        reverse = false;
    }

    translate(width / 2, height /2);

    strokeWeight(10);
    fill(255,255,255);
    polygon(0, 0, width - 350, angle);

}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}