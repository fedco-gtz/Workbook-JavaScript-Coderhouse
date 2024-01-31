let arraysNombres = [];
let nombre;

do {
    nombre = prompt("Ingrese un nombre (o escriba 'ESC' para salir):");
    if (nombre && nombre.toUpperCase() !== "ESC") {
        arraysNombres.push(nombre);
    }
} while (nombre && nombre.toUpperCase() !== "ESC");

for (let i = 0; i < arraysNombres.length; i++) {
    console.log(`Nombre: ${arraysNombres[i]}. Posición: ${i + 1}`);
}
