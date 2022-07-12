let ballR = 150;
let Plus = true;
let moveP = true;
let R = 25;
let G = 25;
let B = 25;
let walk;

let nodesArr = []



let centerX = 0.0, centerY = 0.0;

let radius = 50, rotAngle = -90;
let accelX = 0.0, accelY = 0.0;
let deltaX = 0.0, deltaY = 0.0;
let springing = 0.0009, damping = 0.98;

let nodes = 50;

let nodeStartX = [];
let nodeStartY = [];
let nodeX = [];
let nodeY = [];
let angle = [];
let frequency = [];

let organicConstant = 1.0;

function setup() {
    createCanvas(600, 600);
    background(220);
    walk = width/2;


    centerX = width / 2;
    centerY = height / 2;

    for (let i = 0; i < nodes; i++){
        nodeStartX[i] = 0;
        nodeStartY[i] = 0;
        nodeY[i] = 0;
        nodeY[i] = 0;
        angle[i] = 0;
    }

    for (let i = 0; i < nodes; i++){
        frequency[i] = random(5, 12);
    }

}

function draw() {
    secondOne();
}

function zero(){
    fill(180);
    noStroke();
    circle(width/2, height/2, 150);
}

function firstOne(){

    if (Plus){
        ballR++;
        if(ballR == 200){
            Plus = false;
        }
    }

    if(!Plus){
        ballR--;
        if(ballR == 150){
            Plus = true;
        }
    }

    fill(230, 152, 150);
    noStroke();
    circle(walk, walk, ballR);

}



function drawShape() {
    for (let i = 0; i < nodes; i++){
        nodeStartX[i] = centerX + cos(radians(rotAngle)) * radius;
        nodeStartY[i] = centerY + sin(radians(rotAngle)) * radius;
        rotAngle += 360.0 / nodes;
    }

    curveTightness(organicConstant);
    fill(255);
    beginShape();
    for (let i = 0; i < nodes; i++){
        curveVertex(nodeX[i], nodeY[i]);
    }
    for (let i = 0; i < nodes-1; i++){
        curveVertex(nodeX[i], nodeY[i]);
    }
    endShape(CLOSE);
}


function moveShape() {

    deltaX = random(0, windowWidth) - centerX;
    deltaY = random(0, windowHeight) - centerY;

    deltaX *= springing;
    deltaY *= springing;
    accelX += deltaX;
    accelY += deltaY;

    centerX += accelX;
    centerY += accelY;

    accelX *= damping;
    accelY *= damping;

    organicConstant = 1 - ((abs(accelX) + abs(accelY)) * 0.1);

    for (let i = 0; i < nodes; i++){
        nodeX[i] = nodeStartX[i] + sin(radians(angle[i])) * (accelX * 2);
        nodeY[i] = nodeStartY[i] + sin(radians(angle[i])) * (accelY * 2);
        angle[i] += frequency[i];
    }
}

function secondOne() {
    drawShape();
    moveShape();
}