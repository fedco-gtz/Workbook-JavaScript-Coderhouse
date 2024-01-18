let sesion = prompt("¿Inicio sesión?");

sesion = sesion.toUpperCase();

if (sesion === "SI") {
    console.log("Sesión iniciada");
    // alert("Sesión iniciada");
} else if (sesion === "NO") {
    console.log("Recuerde iniciar sesión");
    // alert("Recuerde iniciar sesión");
} else if (sesion == "") {
    console.log("Error");
    // alert("Error");
} else {
    console.log("Error");
    // alert("Error");
};

/* RESOLUCIÓN COMPAÑERO NICOLÁS RAFFONAUD

let login = true;

if (!login == false) {
    console.log("Debe iniciar sesion")
} else {
    console.log("Bienvenidx al portal")
}

*/