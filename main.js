function calcularCosto() {
    let precioProducto, cantidad;

    while (true) {
        precioProducto = parseFloat(document.getElementById("precio").value);
        cantidad = parseInt(document.getElementById("cantidad").value);

        if (!isNaN(precioProducto) && !isNaN(cantidad)) {
            break;
        } else {
            alert("Por favor, ingrese valores numéricos válidos para Precio y Cantidad.");
            return;
        }
    }

    let costoTotal = precioProducto * cantidad;
    
    mostrarResultadoEnPagina(costoTotal);
    mostrarResultadoEnConsola(costoTotal);
}

function mostrarResultadoEnPagina(costoTotal) {
    let resultadoTexto = document.getElementById("resultadoTexto");

    if (costoTotal >= 0) {
        resultadoTexto.textContent = "El costo total es: " + costoTotal.toFixed(2);
    } else {
        resultadoTexto.textContent = "El costo total no puede ser negativo.";
    }
}

function mostrarResultadoEnConsola(costoTotal) {
    console.log("El costo total es: " + costoTotal.toFixed(2));
}






