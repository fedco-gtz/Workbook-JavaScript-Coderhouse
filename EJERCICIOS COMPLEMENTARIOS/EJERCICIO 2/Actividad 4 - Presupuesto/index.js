let numero = prompt("Ingresa un número");

if (0 <= numero >= 1000) {
    console.log("Presupuesto bajo");
    alert("Presupuesto bajo");
} else if (1001 >= numero <= 3000) {
    console.log("Presupuesto medio");
    alert("Presupuesto medio");
} else {
    console.log("Presupuesto alto");
    alert("Presupuesto alto");
}

