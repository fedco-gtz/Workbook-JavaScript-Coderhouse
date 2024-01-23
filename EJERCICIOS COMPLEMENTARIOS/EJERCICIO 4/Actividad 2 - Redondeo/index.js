for (let i = 0; i < 5; i++) {
    let numeroUsuario = parseFloat(prompt("Ingresa un número decimal:"));

    if (!isNaN(numeroUsuario)) {
        let resultado = redondearAlEntero(numeroUsuario);

        console.log("Número ingresado: " + numeroUsuario);
        console.log("Redondeado al entero más cercano: " + resultado);
    } else {
        console.log("Error: Debes ingresar un número válido en el ciclo " + (i + 1));
        i--;
    };
};

function redondearAlEntero(numero) {
    return Math.round(numero);
};