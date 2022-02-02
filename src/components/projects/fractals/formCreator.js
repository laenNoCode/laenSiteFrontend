window.onload = function() {
    console.log("ok");
    var baseDiv = document.getElementById("name");
    console.log(baseDiv);
    var div2 = document.createElement("div");
    var div = document.createElement("div");
    var numberPoints = document.createElement("input");
    var numberInput = document.createElement("input");
    var buttonStart = document.createElement("button");
    var canvas = document.getElementsByTagName("canvas")[0];

    numberPoints.type = "text";
    numberPoints.placeholder = "enter here number of points";
    numberInput.type = "text";
    numberInput.placeholder = "number of anticlockwize points ignored";
    div.appendChild(numberPoints);
    div.appendChild(numberInput);
    baseDiv.appendChild(div2);



    buttonStart.innerText = "start";
    buttonStart.onclick = function() {
        initFractal(numberPoints.value, numberInput.value);
    }

    var buttonSave = document.createElement("button");
    buttonSave.onclick = function() {
        saveCanvas(window.c, "chaos_" + window.points.length + "_" + window.number, "jpg")
    }
    buttonSave.innerText = "save";
    div2.appendChild(canvas);
    div2.appendChild(div);
    div2.appendChild(buttonStart);
    div2.appendChild(buttonSave);
    canvas.classList = "fractals horizontal";
    div2.classList = "fractals";
    div.classList = "fractals";
    numberPoints.classList = "fractals";
    numberInput.classList = "fractals";
    buttonStart.classList = "fractals";
}