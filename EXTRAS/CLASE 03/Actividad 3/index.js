let continuar = "SI";
let resultado;

do {
    let numeroUno = parseFloat(prompt("Ingrese el primer número"));
    let numeroDos = parseFloat(prompt("Ingrese el segundo número"));
    let operacion = prompt("Seleccione la operación a realizar (+, -, x, /)");

    if (!isNaN(numeroUno) && !isNaN(numeroDos)) {
        if (operacion === "+") {
            resultado = numeroUno + numeroDos;
          console.log(numeroUno + " + " + numeroDos + " = " + resultado);
        } else if (operacion === "-") {
            resultado = numeroUno - numeroDos;
            console.log(numeroUno + " - " + numeroDos + " = " + resultado);
        } else if (operacion === "x") {
            resultado = numeroUno * numeroDos;
            console.log(numeroUno + " x " + numeroDos + " = " + resultado);
        } else if (operacion === "/") {
            if (numeroDos !== 0) {
                resultado = numeroUno / numeroDos;
                console.log(numeroUno + " / " + numeroDos + " = " + resultado);
            } else {
                console.log("Error: No se puede dividir por cero.");
              break;
            }
        } else {
            console.log("Ingresa una operación válida");
          break;
        }
    } else {
        console.log("Ingresa números válidos");
      break;
    }

    continuar = prompt("¿Desea continuar? (SI/NO)").toUpperCase();
} while (continuar === "SI");

console.log("Hasta luego");
