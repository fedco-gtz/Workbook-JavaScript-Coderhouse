let entradaUsuario;

do {
    entradaUsuario = prompt("Ingrese una cadena (o escriba 'ESC' para salir):");

    if (entradaUsuario.toUpperCase() !== "ESC") {
        const esValido = validacion(entradaUsuario);
        console.log("La cadena ingresada es válida: " + esValido);
    }

} while (entradaUsuario.toUpperCase() !== "ESC");

console.log("Fin del programa.");

function validacion(cadena) {
    return cadena.trim() !== ""; 
}





