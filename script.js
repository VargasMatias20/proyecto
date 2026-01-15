function respuesta(correcta) {
    const resultado = document.getElementById("resultado");

    if (correcta) {
        resultado.textContent = "✅ Correcto. Nunca compartas tus contraseñas.";
        resultado.style.color = "lightgreen";
    } else {
        resultado.textContent = "❌ Incorrecto. Es un intento de phishing.";
        resultado.style.color = "red";
    }
}
