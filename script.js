let celcius = document.getElementById("Celcius");
let farhenheit = document.getElementById("Fahrenheit");
let kelvin = document.getElementById("Kelvin");

celcius.oninput = function () {
    let f = (parseFloat(celcius.value) * 9) / 5 + 32;
    farhenheit.value = parseFloat(f.toFixed(2));
    let k = parseFloat(celcius.value) + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
};

farhenheit.oninput = function () {
    let c = ((parseFloat(farhenheit.value) - 32) * 5) / 9;
    celcius.value = parseFloat(c.toFixed(2));
    let k = ((parseFloat(farhenheit.value) - 32) * 5) / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
};

kelvin.oninput = function () {
    let f = ((parseFloat(kelvin.value) - 273.15) * 9) / 5 + 32;
    farhenheit.value = parseFloat(f.toFixed(2));
    let c = parseFloat(kelvin.value) - 273.15;
    celcius.value = parseFloat(c.toFixed(2));
};
