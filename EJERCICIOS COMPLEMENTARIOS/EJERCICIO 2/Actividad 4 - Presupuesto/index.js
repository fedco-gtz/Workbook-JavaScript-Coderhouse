let numero = prompt("Ingresa un número");

if ((numero >= 0) && (numero <= 1000)) {
    console.log("Presupuesto bajo");
    alert("Presupuesto bajo");
} else if ((numero >= 1001) && (numero <= 3000)) {
    console.log("Presupuesto medio");
    alert("Presupuesto medio");
} else if (numero < 0) {
    console.log("No es un dato valido para un presupuesto");
    alert("No es un dato valido para un presupuesto");
} else {
    console.log("Presupuesto alto");
    alert("Presupuesto alto");
}

