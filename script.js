const celsiusInput = document.getElementById("celsius");
const fahrenheitOutput = document.getElementById("fahrenheit");
const kelvinOutput = document.getElementById("kelvin");
const convertBtn = document.getElementById("convertBtn");

function convertTemperature() {
  const celsius = parseFloat(celsiusInput.value);
  if (isNaN(celsius)) {
    fahrenheitOutput.innerText = "-";
    kelvinOutput.innerText = "-";
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  fahrenheitOutput.innerText = fahrenheit.toFixed(2) + " °F";
  kelvinOutput.innerText = kelvin.toFixed(2) + " K";
}

convertBtn.addEventListener("click", convertTemperature);
