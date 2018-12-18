const defaultWidth = 600;
const defaultHeight = 600;
var currentLine = 0;
var finished = false;
var oldColor = false;
var a = 0.43376877;
var b = 0.20130180;
function getValue(c, z0, maximum, limite){
    z = z0;
    for(var i = 0; i < maximum; ++i){
        
        if(z[0] * z[0] + z[1] * z[1] > limite * limite)
            return i;
        var ztmp = [c[0], c[1]];
        ztmp[0] += z[0] * z[0] - z[1] * z[1];
        ztmp[1] += 2* z[1] * z[0];
        z = [ztmp[0],ztmp[1]];
    }
    return maximum;
}

function drawJulia(c = [0,0], limite = 100, max = 36, nbpX = 600, nbpY = 600, xmin = -2, xmax = 2, ymin = -2, ymax = 2){
    background(255);
    for (var x = 0; x < nbpX; x++){
        for(var y = 0; y < nbpY; y++){
            noStroke()
            var xNorm = x / nbpX;
            var yNorm = y / nbpY;
            var x0 = xmin + (xmax - xmin) * xNorm;
            var y0 = ymin + (ymax - ymin) * yNorm;
            var m = getValue(c, [x0, y0], max, limite);
            fill(255 * m / max,  (30 * 255 * m / max) % 255, 255 - 255 * m / max);
            fill(255 * m / max,  0, 255 -  m / max);
            rect(xNorm * defaultWidth, yNorm * defaultHeight, defaultWidth / nbpX, defaultHeight / nbpY);
        }
    }
}
function drawJuliaLine(c = [0,0], limite = 100, max = 36, nbpX = 600, nbpY = 600, xmin = -2, xmax = 2, ymin = -2, ymax = 2){
    
    var y = currentLine;
    for(var x = 0; x < nbpY; x++){
        noStroke()
        var xNorm = x / nbpX;
        var yNorm = y / nbpY;
        var x0 = xmin + (xmax - xmin) * xNorm;
        var y0 = ymin + (ymax - ymin) * yNorm;
        var m = getValue(c, [x0, y0], max, limite);
        fill(255 * m / max,  (30 * 255 * m / max) % 255, 255 - 255 * m / max);
        if (oldColor)
            fill(255 * m / max,  0, 255 -  m / max);
        rect(xNorm * defaultWidth, yNorm * defaultHeight, defaultWidth / nbpX, defaultHeight / nbpY);
    }
    ++currentLine;
    if(currentLine == nbpY)
        {
            finished = true;
            currentLine = 0;
        }
}
function createInput(){
    var node = document.createElement("input");
    document.body.appendChild(node);
    return node;
}
function createButton(text){
    var node = document.createElement("button");
    node.innerText = text;
    document.body.appendChild(node);
    return node;
}
function addBr(){
    var node = document.createElement("br");
    document.body.appendChild(node);
    return node;
}
function createCheckbox(){
    var node = createInput();
    node.type = "checkbox";
    return node;
}

window.setup = function()
{
    var aInput = createInput();
    aInput.placeholder = "a value";
    var bInput = createInput();
    bInput.placeholder = "b value";
    var startButton = createButton("start");
    var checkbox = createCheckbox();
    addBr();
    startButton.onclick = function(){
        reset(float(aInput.value), float(bInput.value));
        oldColor = checkbox.checked;
    }
    window.canvas = createCanvas(defaultWidth, defaultHeight);
    //drawJulia([0.43376877,0.20130180]);
    
    frameRate(30);
}

window.reset=function(x, y)
{
    a = x;
    b = y;
    finished = false;
    
}

window.draw = function(){
    for(var i = 0; i < 2; i++)
        if(!finished)
            drawJuliaLine([a,b]);
}
