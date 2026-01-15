window.onload = function () {

    let nombre = prompt("Ingrese su nombre:");
    let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");
    let tipoSangre = prompt("Ingrese su tipo de sangre:");
    let alturaPulgadas = prompt("Ingrese su altura en pulgadas:");
    let pesoKg = prompt("Ingrese su peso en kilogramos:");
    let sexo = prompt("Ingrese su sexo (M/F):");

    let alturaCm = alturaPulgadas * 2.54;
    let pesoLb = pesoKg * 2.20462;

    let hoy = new Date();
    let nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("sangre").innerHTML = tipoSangre;
    document.getElementById("altura").innerHTML = alturaCm.toFixed(2);
    document.getElementById("peso").innerHTML = pesoLb.toFixed(2);
    document.getElementById("edad").innerHTML = edad;

    if (sexo.toUpperCase() === "M") {
        document.getElementById("icono").innerHTML = "♂";
    } else if (sexo.toUpperCase() === "F") {
        document.getElementById("icono").innerHTML = "♀";
    }
};
