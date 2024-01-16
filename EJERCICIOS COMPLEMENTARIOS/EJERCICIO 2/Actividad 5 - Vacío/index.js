let productoUno = prompt("Ingresar el primer producto de almacen");
let productoDos = prompt("Ingresar el segundo producto de almacen");
let productoTres = prompt("Ingresar el tercer producto de almacen");
let productoCuatro = prompt("Ingresar el cuarto producto de almacen");

if ((productoUno != "") && (productoDos != "") && (productoTres != "") && (productoCuatro != "")) {
    console.log("1- " + productoUno + " " +
    "2- " + productoDos + " " + 
    "3- " + productoTres + " " +
    "4- " + productoCuatro);
    alert("1- " + productoUno + " " +
    "2- " + productoDos + " " + 
    "3- " + productoTres + " " +
    "4- " + productoCuatro);
} else {
    console.log("Error: Es necesario cargar todos los productos");
    alert("Error: Es necesario cargar todos los productos");
}