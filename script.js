window.onload = iniciar;

function iniciar() {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
    //btnCalcular.addEventListener("mouseover", function() {alert("pasaste arriba del botón")});
}

function clickBtnCalcular() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingresa valores válidos para peso y altura.");
        return;
    }

    var imc = peso / (altura * altura);
    alert("El IMC es: " + imc.toFixed(2));
    return imc;
}
