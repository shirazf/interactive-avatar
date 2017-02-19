var x, y;
var s = second()
function setup() {
    createCanvas(500, 500);
background(255, 92, 103);
    x = 50;
    y = 50;
fill(239, 146, 7); //base color
    noStroke();
    ellipse (250, 250, 225, 300);
        ellipse(272, 263, 190, 280);
    fill(238,139,9);//dark shade 1
        ellipse(195, 300, 96, 140);
        ellipse(214, 316, 80, 150);
        ellipse(250, 385, 100, 40);
        ellipse(250, 370, 25, 50);
        ellipse(200, 220, 100, 175);
        ellipse(255, 280, 25, 100);//nose shade
    fill(223, 134, 17);//dark shade 2
        ellipse(250, 300, 20, 50);//nose
        ellipse(250, 370, 70, 20);//chin
        ellipse(200, 260, 80, 60);//left eye socket
    fill(239, 146, 7); //base color
        ellipse(200, 240, 80, 20); //eyelid
        arc(200, 285, 80, 80, 0, PI, OPEN);
        ellipse(235, 280, 17, 40);
    fill(222,162,21);//highlight
        arc(200, 285, 30, 50, 0, PI, OPEN);//undereye
        arc(250, 230, 90, 50, 100, PI+QUARTER_PI, OPEN);//forehead stuff
        arc(250, 130, 90, 50, 100, PI+QUARTER_PI, OPEN);
        ellipse(250, 180, 50, 100);
        ellipse(255, 300, 8, 50);//nose
        ellipse(250, 360, 70, 20);//chin
    fill(235, 173, 30); //lighter highlight
        arc(250, 230, 70, 30, 100, PI+QUARTER_PI, OPEN);//forehead stuff
        arc(250, 130, 70, 30, 100, PI+QUARTER_PI, OPEN);
        ellipse(250, 180, 30, 100);
    fill(255, 199, 67); //eye
        ellipse(200, 268, 48, 40);
    fill(100);   //inside eye stuff
        ellipse(200, 268, 20, 20);
    fill(200);
        ellipse(200, 268, 5, 5);
}

function draw() {

    //top rectangle 
        fill(255, 92, 103);
        noStroke();
        rect(0, 0, 500, 60);
    // drawing
    if (mouseIsPressed) {
        fill(255, 153, 30);
        noStroke();
        ellipse (mouseX, mouseY, 20, 20);
    };
    //words
        fill(0);
        textSize (15);
        text ("give the face a new expression in less than a minute", x, y);
    // going across horizontal axis, x changes slowly
        x = x + .5;
    // its place on y axis is constant
        y = y;
    // Reset to the left
        if (x > 500) {
        x = 0;}
    cursor(CROSS);
    //middle rectangle
        fill(255, 92, 103);
        noStroke();
        rect (100, 400, 30, 30);
    var s = second();
    textSize(12);
    fill(0);  
    text("time: \n" + s, 100, 400);
}
