let valor = entrada();
let transformacion = procesamiento(valor);
console.log("El valor ingresado es: " + valor);
console.log("El valor transformado por multiplicación es: " + transformacion);
salida();

function entrada() {
    let valorIngresado = prompt("Ingresa un número");
    return parseFloat(valorIngresado);
};

function procesamiento(valor) {
    const cambio = 4;
    let transformacion = valor * cambio;
    return transformacion;
};

function salida(valor) {
    alert("El resultado es: " + transformacion);
};