let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su clave");

usuario = usuario.toUpperCase();
contraseña = contraseña.toUpperCase();

if ((usuario === "ADMIN") && (contraseña === "SECRETA" || contraseña === "123456")) {
    console.log("Acceso correcto");
    // alert("Acceso correcto");
} else {
    console.log("Acceso denegado");
    // alert("Acceso denegado");
}

/* RESOLUCIÓN COMPAÑERO NICOLÁS RAFFONAUD

let user = prompt("Ingrese su nombre de Usuario");
let password = prompt("Ingrese la constraseña")

if (user === "admin" && (password === "12345" || password === "secreta")) {
    console.log("Acceso Concedido")
} else {
    console.log("Acceso Denegado")
}

*/