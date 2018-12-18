console.log("loaded")
var points;
var currentPoints;
var numberDraw = 200;
var currentPoint;
var defaultWidth = 600;
var defaultHeight = 600;
var selectedPoint = 0;
var number = 0;
var nd = 0;

window.setup = function() {
    console.log("setup");
    frameRate(30);
    window.c = createCanvas(defaultWidth, defaultHeight);
    initFractal();
}

window.initFractal = function(numberPoints = 0, anticlok = 0) {
    selectedPoint = 0;
    nd = 0;
    initPoints(300, numberPoints);
    background(0);
    fill(255)
    for (var p of points) {
        ellipse(p.x, p.y, 5, 5);
    }
    number = anticlok;
    window.number = number;
}

window.draw = function() {
    update(number);

    noStroke();
    for (var p of currentPoints) {
        nd++;
        fill(nd % 255, floor(nd / 255) % 255, floor(nd / (255 * 5)) % 255, 180);
        ellipse(p.x, p.y, 0.5);
    }
}

window.update = function(number) {
    if (number >= points.length)
        return;
    for (var p of currentPoints) {
        selectedPoint += floor(random() * (points.length - number));
        //while method is different

        selectedPoint += 1;
        selectedPoint %= points.length;
        currentPoint.x = (currentPoint.x + points[selectedPoint].x) / 2;
        currentPoint.y = (currentPoint.y + points[selectedPoint].y) / 2;
        p.x = currentPoint.x;
        p.y = currentPoint.y;
    }
}

window.initPoints = function(distance, nbPoints) {

    points = [];
    var centerX = defaultWidth / 2;
    var centerY = defaultHeight / 2;
    for (var i = 0; i < nbPoints; ++i) {
        points.push({
            x: centerX + distance * cos(i / nbPoints * TWO_PI),
            y: centerY + distance * sin(i / nbPoints * TWO_PI),
        });
    }
    currentPoint = {
        x: random() * defaultWidth,
        y: random() * defaultHeight,
    }
    currentPoints = [];
    for (var i = 0; i < numberDraw; ++i) {
        currentPoints.push({ x: 0, y: 0, });
    }
    window.points = points;
}