let cantidad = parseInt(prompt("Ingresa la cantidad de productos que desea comprar"));
let precioUnitario = parseInt(prompt("Ingresa el precio unitario del productor"));

calcularPrecioConDescuento(cantidad, precioUnitario);


function calcularPrecioConDescuento(cantidad, precioUnitario) {
    const DESCUENTO = 0.1;

    if (cantidad >= 10) {
        console.log("Resumen de la compra");
        console.log("Cantidad: " + cantidad + " productos");
        console.log("Precio unitario: $" + precioUnitario);
        console.log("Descuento: " + DESCUENTO * 100 + "%");
        console.log("Total a abonar: $" + (precioUnitario * (1 - DESCUENTO)) * cantidad);
    } else {
        console.log("Resumen de la compra");
        console.log("Cantidad: " + cantidad + " productos");
        console.log("Precio unitario: $" + precioUnitario);
        console.log("Total a abonar: $" + (precioUnitario * cantidad));
    };
};


