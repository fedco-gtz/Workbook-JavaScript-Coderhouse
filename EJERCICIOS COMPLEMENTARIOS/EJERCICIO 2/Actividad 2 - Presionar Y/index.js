let tecla = prompt("Presiona una tecla");

if (tecla == "y") {
    console.log("Correcto");
    alert("Correcto");
} else if (tecla == "Y") {
    console.log("Correcto");
    alert("Correcto");
} else {
    console.log("Incorrecto");
    alert("Incorrecto");
}

/* RESOLUCIÓN CON OPERADOR LÓGICO
const teclaY = "y";
const teclaX = "Y";

if ((tecla === teclaY) || (tecla === teclaX)) {
    console.log("Correcto");
    alert("Correcto");
} else {
    console.log("Incorrecto");
    alert("Incorrecto");
} */
