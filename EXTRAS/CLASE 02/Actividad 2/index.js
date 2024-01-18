let consulta = prompt("Ingrese el producto por el cual desea consultar disponibilidad");
let descuento = prompt("¿Desea saber si el producto ingresado tiene descuento?");

consulta = consulta.toUpperCase();
descuento = descuento.toUpperCase();

const PRODUCTOUNO = ("SMARTTV");
const PRODUCTODOS = ("CAFETERA");
const PRODUCTOTRES = ("ASPIRADORA");
const PRODUCTOCUATRO = ("TERMO");

if (consulta == PRODUCTOUNO && descuento == "SI") {
    console.log("Producto disponible");
    console.log("Tiene un 10% de descuento pagando en efectivo");
    // alert("Producto disponible");
    // alert("Tiene un 10% de descuento pagando en efectivo");
} else if (consulta == PRODUCTODOS && descuento == "SI") {
    console.log("Producto disponible");
    console.log("Tiene un 5% de descuento pagando en efectivo");
    // alert("Producto disponible");
    // alert("Tiene un 5% de descuento pagando en efectivo");
} else if (consulta == PRODUCTOTRES && descuento == "SI") {
    console.log("Producto disponible");
    console.log("No tiene descuento");
    // alert("Producto disponible");
    // alert("No tiene descuento");
} else if (consulta == PRODUCTOCUATRO && descuento == "SI") {
    console.log("Producto disponible");
    console.log("Tiene un 20% de descuento pagando en efectivo");
    // alert("Producto disponible");
    // alert("Tiene un 20% de descuento pagando en efectivo");
} else if (consulta == PRODUCTOUNO && descuento == "NO") {
    console.log("Producto disponible");
    // alert("Producto disponible");
} else if (consulta == PRODUCTODOS && descuento == "NO") {
    console.log("Producto disponible");
    // alert("Producto disponible");
} else if (consulta == PRODUCTOTRES && descuento == "NO") {
    console.log("Producto disponible");
    // alert("Producto disponible");
} else if (consulta == PRODUCTOCUATRO && descuento == "NO") {
    console.log("Producto disponible");
    // alert("Producto disponible");
} else if ((consulta == PRODUCTOUNO || consulta == PRODUCTODOS || consulta == PRODUCTOTRES || consulta == PRODUCTOCUATRO) && descuento == "") {
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