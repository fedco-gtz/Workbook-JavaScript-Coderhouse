let edad = prompt("Ingrese su edad");
const registro = prompt("¿Estas registrado?");

if ((edad >= 18) && (registro == "si" || registro == "SI")) {
    console.log("BIENVENIDO");
    alert("BIENVENIDO");
} else {
    console.log("ACCESO DENEGADO");
    alert("ACCESO DENEGADO");
}