let sesion = prompt("¿Inicio sesión?");

if (sesion == "si" || sesion == "SI" || sesion == "Si") {
    console.log("Bienvenido");
    // alert("Bienvenido");
} else if (sesion == "no" || sesion == "NO" || sesion == "No") {
    console.log("Recuerde iniciar sesión");
    // alert("Recuerde iniciar sesión");
} else if (sesion == "") {
    console.log("Error");
    // alert("Error");
}

/* RESOLUCIÓN COMPAÑERO

let login = true;

if (!login == false) {
    console.log("Debe iniciar sesion")
} else {
    console.log("Bienvenidx al portal")
}

*/