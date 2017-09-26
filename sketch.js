var cx = [];
var cy = [];
var N, i;

function setup() {
    createCanvas(windowWidth, windowHeight);
    initCircles();
}

function draw() {
    background(150,150,150);
    drawCircles();
}
// initialize circle positions
function initCircles() {
    N = 100;
    for (i = 0; i < N; i++) {
        cx[i] = random(0, width);
        cy[i] = random(0, height);
    }
}
// draw circles with a given color
function drawCircles() {
	var size = random(10,20);
    fill(255,255,255);
    noStroke();

    for (i = 0; i < N; i++) {
        cx[i] = cx[i] + -0.3;
        cy[i] = cy[i] + 1;
        ellipse(cx[i], cy[i], size, size);
    }
}