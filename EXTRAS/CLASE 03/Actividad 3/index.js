let numeroUno = parseFloat(prompt("Ingrese el primer número"));
let numeroDos = parseFloat(prompt("Ingrese el segundo número"));
let operacion = prompt("Seleccione la operación a realizar (+, -, x, /)");
let resultado;
let continuar;

do {
    if (!isNaN(numeroUno) && !isNaN(numeroUno)) {
        if (operacion === "+") {
            resultado = numeroUno + numeroDos;
            continuar = "NO"
        } else if (operacion === "-") {
            resultado = numeroUno - numeroDos;
            continuar = "NO"
        } else if (operacion === "x") {
            resultado = numeroUno * numeroDos;
            continuar = "NO"
        } else if (operacion === "/") {
            if (numeroDos !== 0) {
                resultado = numeroUno / numeroDos;
                continuar = "NO"
            } else {
                console.log("Error: No se puede dividir por cero.");
                continuar = "NO"
            }
        } else {
            console.log("Ingresa una operacion valida");
            continuar = "NO";
        }
    } else {
        console.log("Ingresa un numero valido");
        continuar = "NO";
    }

} while (continuar !== "NO");


console.log("Resultado: " + resultado);

// CODIGO AVANZADO, VERIFICAR MAS LO DE EL CONTINUAR Y VER SI SE PUEDE ARREGLAR ALGO MAS
