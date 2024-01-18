let edad = prompt("Ingrese su edad");
const REGISTRO = prompt("¿Estas registrado?");

if ((edad >= 18) && (REGISTRO == "si" || REGISTRO == "SI" || REGISTRO == "Si")) {
    console.log("BIENVENIDO");
    // alert("BIENVENIDO");
} else {
    console.log("ACCESO DENEGADO");
    // alert("ACCESO DENEGADO");
}


/* RESOLUCIÓN COMPAÑERO NICOLÁS RAFFONAUD 

let registro = false;
let mayorDeEdad = true;

if (registro == true && mayorDeEdad == true) {
    console.log("Bienvenidx a nuestro portal")
} else {
    console.log("Acceso Denegado")
}

*/