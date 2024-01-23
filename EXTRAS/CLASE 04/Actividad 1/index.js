let numero = prompt("Ingresar un número");

let resultado = esParOImpar(numero);

function esParOImpar(numero) {
    
    if (numero % 2 == 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
    return
};


