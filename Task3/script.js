const convertButton = document.getElementById("convert");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const resultInput = document.getElementById("result");

convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let convertedTemperature;
    let convertedUnit;
    if (unit === "celsius") {
        convertedTemperature = (temperature * 9 / 5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperature - 32) * 5 / 9;
        convertedUnit = "Celsius";
    } else if (unit === "kelvin") {
        convertedTemperature = temperature - 273.15;
        convertedUnit = "Celsius";
    }
    resultInput.value = `${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}