let precioUno = prompt("Ingresa el valor del primer producto");
let precioDos = prompt("Ingresa el valor del segundo producto");
let precioTres = prompt("Ingresa el valor del tercer producto");

const descuentoUno = precioUno - (20*100)/precioUno;
const descuentoDos = precioDos - (30*100)/precioDos;
const descuentoTres = precioTres -  (40*100)/precioTres;

console.log("El precio del primer producto es de " + precioUno + " y se le aplica un descuento del 20%, quedando en " + descuentoUno);
console.log("El precio del segundo producto es de " + precioDos + " y se le aplica un descuento del 30%, quedando en " + descuentoDos);
console.log("El precio del tercer producto es de " + precioTres + " y se le aplica un descuento del 40%, quedando en " + descuentoTres);