

function randomPalette() {


    //Primero generar un inicio entre 0 y 359
    let escala = Math.floor(Math.random() * 360);
    console.log("escala", escala);
    let colors = [];
    for (let index = 0; index < 5; index++) {
        let hue = escala / 359;
        console.log("Convert to 0 and 1", hue);
        let rgbColor = hslToRgb(hue, 0.5, 0.5);
        console.log("rgbColor", rgbColor);
        const hexaColor = rgbToHex(rgbColor[0], rgbColor[1], rgbColor[2]);
        console.log("Hexa color", hexaColor);
        colors.push(hexaColor);
        escala = sumDiferencial(escala);
    }
    generateRules(colors);
}

function rgbToHex(r, g, b) {
    return "#" +
        ("0" + parseInt(r, 10).toString(16)).slice(-2) +
        ("0" + parseInt(g, 10).toString(16)).slice(-2) +
        ("0" + parseInt(b, 10).toString(16)).slice(-2);
}

function sumDiferencial(escala) {
    let diferenciaTono = (360 / 5);

    if ((escala + diferenciaTono) > 359) {
        escala = ((escala + diferenciaTono) - 359);
    } else {
        escala = escala + diferenciaTono;
    }
    return escala;
}


function generateRules(colors) {
    var reglas = [];
    reglas.push(".website-background{ color: " + colors[0] + ";}");
    reglas.push(".element-text{ color: " + colors[1] + ";}");
    reglas.push(".element-border{ border-color:" + colors[2] + ";}");
    reglas.push(".element-background{ background-color: " + colors[3] + ";}");
    reglas.push(".header{ color: " + colors[4] + ";}");
    $("#css-rules").val(reglas.join("\n"));

    $(".color-container-0").css("background-color", colors[0]);
    $(".color-container-1").css("background-color", colors[1]);
    $(".color-container-2").css("background-color", colors[2]);
    $(".color-container-3").css("background-color", colors[3]);
    $(".color-container-4").css("background-color", colors[4]);
}

function limpiarPaleta() {
    let colorWhite = "#FFFFFF";
    var reglas = [];
    reglas.push(".website-background{ color: " + colorWhite + ";}");
    reglas.push(".element-text{ color: " + colorWhite + ";}");
    reglas.push(".element-border{ border-color:" + colorWhite + ";}");
    reglas.push(".element-background{ background-color: " + colorWhite + ";}");
    reglas.push(".header{ color: " + colorWhite + ";}");
    $("#css-rules").val(reglas.join("\n"));

    $(".color-container-0").css("background-color", colorWhite);
    $(".color-container-1").css("background-color", colorWhite);
    $(".color-container-2").css("background-color", colorWhite);
    $(".color-container-3").css("background-color", colorWhite);
    $(".color-container-4").css("background-color", colorWhite);
}