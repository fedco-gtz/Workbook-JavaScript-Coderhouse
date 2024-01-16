let sesion = prompt("¿Inicio sesión?");

if (sesion == "si" || sesion == "SI") {
    console.log("Bienvenido");
    alert("Bienvenido");
} else if (sesion == "no" || sesion == "NO") {
    console.log("Recuerde iniciar sesión");
    alert("Recuerde iniciar sesión");
} else if (sesion == "") {
    console.log("Error");
    alert("Error");
}