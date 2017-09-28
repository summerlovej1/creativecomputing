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
	var size1 = 12;
	var size2 = 17;
    fill(255,255,255);
    noStroke();

    for (i = 0; i < N; i++) {
    	cx[i] = cx[i] + 0.1;
        cy[i] = cy[i] + 1.5;
        if(i%2 == 0){
        	cy[i] = cy[i]+ 0.8;
        	ellipse(cx[i], cy[i], size2, size2);
        }
        ellipse(cx[i], cy[i], size1, size1);
        if(cy[i]> height){
        	cy[i]=0;
        }
        if (cx[i]>width){
        	cx[i]=0;
        }

    }
}
