let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su clave");

if ((usuario == "admin" || usuario == "ADMIN" || usuario == "Admin") && (contraseña == "secreta" || contraseña =="SECRETA" || contraseña == "Secreta" || contraseña =="123456")) {
    console.log("Acceso correcto");
    alert("Acceso correcto");
} else {
    console.log("Acceso denegado");
    alert("Acceso denegado");
}