/*
“200509 Aqua Planet” by Che-Yu Wu
http://openprocessing.org/sketch/892021
License: CreativeCommons Attribution NonCommercial ShareAlike
https://creativecommons.org/licenses/by-nc-sa/3.0
 */

var colorsBlue = "04080f-507dbc-a1c6ea-bbd1ea-dae3e5".split("-").map(a => "#" + a)
var colorsRed = "fe7f2d-fcca46-a1c181-619b8a-333".split("-").map(a => "#" + a)

function planet(x, y, r = 30) {

    push()
    translate(x, y)
    let lastX, lastR, lastAng
    for (var i = 0; i < 130; i++) {
        let cc = color(colorsBlue[int(noise(frameCount / 10, i) * colorsBlue.length) % colorsBlue.length])
        cc.setAlpha(150)
        fill(cc)
        noStroke()
        let shadowCC = color(cc)
        shadowCC.setAlpha(255)
        drawingContext.shadowColor = shadowCC;
        drawingContext.shadowBlur = 30;
        let xx = noise(i * 2, frameCount / 100) * r * noise(i) * 2
        let ang = noise(i, frameCount / 800, 500) * 10 * PI
        let rr = noise(i, 500, frameCount / 50) * 50 * (15 / (sqrt(xx) + 1))
        ellipse(xx * cos(ang), xx * sin(ang), rr)
        if (lastX && random() < 0.1) {
            push()
            stroke(255, 50)
            line(xx * cos(ang), xx * sin(ang), lastX * cos(lastAng), lastX * sin(lastAng))
            pop()
        }


        let cc2 = colorsRed[int(noise(frameCount / 10, i) * colorsBlue.length) % colorsBlue.length]
        fill(cc2)

        drawingContext.shadowColor = color(cc2);
        drawingContext.shadowBlur = 10;
        push()
        rectMode(CENTER)
        translate(xx * cos(ang * 2), xx * sin(ang * 2))
        rotate(ang * 2)
        rotate(i)
        rect(0, 0, sqrt(rr) * sin(frameCount / 2 + i) * 2)
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

function setup() {

    createCanvas(600, 600);

    background(100);
    blendMode(SCREEN)
    // planet(width/2,height/2,100)
}

function draw() {
    blendMode(BLEND)
    // background(0,20)
    // background(colorsBlue[0])
    fill(4, 11, 60, 60)
    noStroke()
    rect(0, 0, width, height)
    blendMode(SCREEN)
    planet(width / 2, height / 2, 380)

    stroke(255, 50)

    blendMode(MULTIPLY)
    for (var i = 0; i < width; i += 100) {
        fill(230, map(i, width / 2, width, 0, 20))
        ellipse(width / 2, height / 2, pow(i, 0.9) * 3, pow(i, 0.9) * 3)
    }
    blendMode(BLEND)
    noFill()
    strokeWeight(5)
    drawingContext.shadowColor = colorsRed[1];
    drawingContext.shadowBlur = 30;
    for (var i = 0; i < 5; i++) {
        let aa = noise(i, frameCount / 10) * 2
        arc(width / 2, height / 2, width - 100 - i * 20, height - 100 - i * 20, aa, aa + noise(i, frameCount / 10) / 2)
    }
    drawingContext.shadowBlur = 0;

    strokeWeight(2)
    // ellipse(mouseX, mouseY, 20, 20);
}