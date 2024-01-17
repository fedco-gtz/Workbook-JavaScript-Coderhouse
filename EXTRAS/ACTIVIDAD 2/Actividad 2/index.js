let consulta = prompt("Ingrese el producto por el cual desea consultar disponibilidad");

const productoUno = ("SmartTv");
const productoDos = ("Cafetera");
const productoTres = ("Aspiradora");
const productoCuatro = ("Termo");

if ((consulta == productoUno) || (consulta == productoCuatro)) {
    console.log("Producto disponible");
    console.log("Tiene un 10% de descuento pagando en efectivo");
    // alert("Producto disponible");
    // alert("Tiene un 10% de descuento pagando en efectivo");
} else if (consulta == productoDos) {
    console.log("Producto disponible");
    console.log("Tiene un 5% de descuento pagando en efectivo");
    // alert("Producto disponible");
    // alert("Tiene un 5% de descuento pagando en efectivo");
} else if (consulta == productoTres) {
    console.log("Producto disponible");
    console.log("No tiene descuento");
    // alert("Producto disponible");
    // alert("No tiene descuento");
} else if (consulta == productoCuatro){
    console.log("Producto disponible");
    console.log("Tiene un 20% de descuento pagando en efectivo");
    // alert("Producto disponible");
    // alert("Tiene un 20% de descuento pagando en efectivo");
} else {
    console.log("Producto agotado");
    // alert("Producto agotado");
}

/* RESOLUCIÓN COMPAÑERO

let lavarropa = "sin stock";
let descuento = false;


if (lavarropa === "en stock" || descuento === true) {
    console.log("Producto Disponible")
} else {
    console.log("Producto Agotado")
}

*/