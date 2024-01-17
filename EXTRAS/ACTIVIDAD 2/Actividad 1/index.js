let edad = prompt("Ingrese su edad");
const registro = prompt("¿Estas registrado?");

if ((edad >= 18) && (registro == "si" || registro == "SI" || registro == "Si")) {
    console.log("BIENVENIDO");
    // alert("BIENVENIDO");
} else {
    console.log("ACCESO DENEGADO");
    // alert("ACCESO DENEGADO");
}


/* RESOLUCIÓN COMPAÑERO 

let registro = false;
let mayorDeEdad = true;

if (registro == true && mayorDeEdad == true) {
    console.log("Bienvenidx a nuestro portal")
} else {
    console.log("Acceso Denegado")
}

*/