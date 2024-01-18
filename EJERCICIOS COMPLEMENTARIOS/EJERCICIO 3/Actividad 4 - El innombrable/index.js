let nombre = "";
let nombreIngresado;

do {
    nombreIngresado = prompt("Ingresa un nombre");
    nombre += nombreIngresado + "\n";
} while (nombreIngresado.toLowerCase() !== "voldemort");

console.log("Listado de Nombres:\n" + nombre);