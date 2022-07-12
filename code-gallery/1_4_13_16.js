let ballR = 25;
let Plus = true;
let moveP = true;
let R = 25;
let G = 25;
let B = 25;
let walk;
let eye = 1;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    zero();
    firstOne();
}


function zero(){
    background(230);
    fill(180);
    noStroke();
    circle(width/2, height/2, 200);
}

function firstOne(){

    if (Plus){
        ballR++;
        if(ballR == 60){
            Plus = false;
            R = random(100,200);
            G = random(100,200);
            B = random(100,200);
        }
    }

    if(!Plus){
        ballR--;
        if(ballR == 25){
            Plus = true;
            R = random(100,200);
            G = random(100,200);
            B = random(100,200);
        }
    }


    fill(R,G,B);
    noStroke();
    translate(width / 2, height / 2);
    scale(ballR*0.04);
    circle(0, 0, 200);

    fill(255);
    noStroke();
    translate(0, 0);
    rotate(-0.1);
    rect(12, -ballR, 90, 23);

    translate(0, 0);
    rotate((ballR-10)*0.01);
    rect(-110, -40, 90, 23);


    fill(255);
    noStroke();
    translate(0, -10);

    rotate((ballR-60)*0.01);
    rect(-50, (ballR+10)*1, 90, 10);

    fill(255,192,203);
    rect(-90, 40, 20, 10);
    rect(60, 50, 20, 10);

    translate(0, 0);
    scale(1, 1);
    fill(255);
    circle(40, 20, 30);

    translate(0, 16);
    scale(1, ballR*0.02);
    circle(-40, 0, 30);

}