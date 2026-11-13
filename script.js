fahren = document.getElementById("miTemperatura").value;

function calcularTemperatura() {
    temperaturaEnCelsius = (Number(fahren) - 32) * 5/9;
    document.getElementById("elH1").textContent = temperaturaEnCelsius;
}

calcularTemperatura();