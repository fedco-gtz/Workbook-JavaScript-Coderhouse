let contrasena = prompt("Ingrese la contraseña");

resultado = esContrasenaValida(contrasena);

console.log(resultado);

function esContrasenaValida(contrasena) {
    if (contrasena.length >= 8) {
        if (contrasena.includes("@")) {
            return "Contraseña válida";
        } else {
            return "Contraseña no cumple los requisitos (falta '@')";
        }
    } else {
        return "Contraseña no cumple los requisitos (longitud mínima: 8 caracteres)";
    }
};


