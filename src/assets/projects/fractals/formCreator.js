window.onload = function() {
    console.log("ok");
    var div2 = document.createElement("div");
    var div = document.createElement("div");
    var numberPoints = document.createElement("input");
    var numberInput = document.createElement("input");
    numberPoints.type = "text";
    numberPoints.placeholder = "enter here number of points";
    numberInput.type = "text";
    numberInput.placeholder = "number of anticlockwize points ignored";
    div.appendChild(numberPoints);
    div.appendChild(numberInput);
    document.body.appendChild(div2);
    var canvas = document.getElementsByTagName("canvas")[0];
    canvas.classList = "horizontal";
    var buttonStart = document.createElement("button");
    buttonStart.innerText = "start";
    buttonStart.onclick = function() {
        initFractal(numberPoints.value, numberInput.value);
    }

    var buttonSave = document.createElement("button");
    buttonSave.onclick = function() {
        saveCanvas(c, "chaos_" + points.length + "_" + number, "jpg")
    }
    buttonSave.innerText = "save";
    div2.appendChild(canvas);
    div2.appendChild(div);
    div2.appendChild(buttonStart);
    div2.appendChild(buttonSave);

}