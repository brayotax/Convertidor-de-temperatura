function calcularTemperatura() {
    const fahren = document.getElementById("miTemperatura").value;
    let temperaturaEnCelsius = (fahren - 32) * 5/9;
    document.getElementById("elH1").textContent = temperaturaEnCelsius.toFixed(2) + " °C";
}

miBoton.addEventListener('click', calcularTemperatura);