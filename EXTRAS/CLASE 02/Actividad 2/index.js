let consulta = prompt("Ingrese el producto por el cual desea consultar disponibilidad");
let descuento = prompt("¿Desea saber si el producto ingresado tiene descuento?");

consulta = consulta.toUpperCase();
descuento = descuento.toUpperCase();

const productoUno = ("SMARTTV");
const productoDos = ("CAFETERA");
const productoTres = ("ASPIRADORA");
const productoCuatro = ("TERMO");

if (consulta == productoUno && descuento == "SI") {
    console.log("Producto disponible");
    console.log("Tiene un 10% de descuento pagando en efectivo");
    // alert("Producto disponible");
    // alert("Tiene un 10% de descuento pagando en efectivo");
} else if (consulta == productoDos && descuento == "SI") {
    console.log("Producto disponible");
    console.log("Tiene un 5% de descuento pagando en efectivo");
    // alert("Producto disponible");
    // alert("Tiene un 5% de descuento pagando en efectivo");
} else if (consulta == productoTres && descuento == "SI") {
    console.log("Producto disponible");
    console.log("No tiene descuento");
    // alert("Producto disponible");
    // alert("No tiene descuento");
} else if (consulta == productoCuatro && descuento == "SI") {
    console.log("Producto disponible");
    console.log("Tiene un 20% de descuento pagando en efectivo");
    // alert("Producto disponible");
    // alert("Tiene un 20% de descuento pagando en efectivo");
} else if (consulta == productoUno && descuento == "NO") {
    console.log("Producto disponible");
    // alert("Producto disponible");
} else if (consulta == productoDos && descuento == "NO") {
    console.log("Producto disponible");
    // alert("Producto disponible");
} else if (consulta == productoTres && descuento == "NO") {
    console.log("Producto disponible");
    // alert("Producto disponible");
} else if (consulta == productoCuatro && descuento == "NO") {
    console.log("Producto disponible");
    // alert("Producto disponible");
} else if ((consulta == productoUno || consulta == productoDos || consulta == productoTres || consulta == productoCuatro) && descuento == "") {
    console.log("Error en la busqueda");
    // alert("Error en la busqueda");
} else {
    console.log("Producto agotado");
    // alert("Producto agotado");
}

/* RESOLUCIÓN COMPAÑERO NICOLÁS RAFFONAUD

let lavarropa = "sin stock";
let descuento = false;


if (lavarropa === "en stock" || descuento === true) {
    console.log("Producto Disponible")
} else {
    console.log("Producto Agotado")
}

*/