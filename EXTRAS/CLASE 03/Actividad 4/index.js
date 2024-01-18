let cantidad = prompt("Ingresa el monto en pesos que deseas convertir");
let conversion;

const DIVISA = prompt("Indique el tipo de divisa (Dolar, Euro, Peso Uruguayo, Real, Guarani, Boliviano, Peso Chileno)").toUpperCase();


switch (DIVISA) {
    case "DOLAR":
        conversion = cantidad * 0.0012;
        console.log("El monto ingresado en pesos " + cantidad + " es " + conversion + " dolares");
        break;
    case "EURO":
        conversion = cantidad * 0.0011;
        console.log("El monto ingresado en pesos " + cantidad + " es " + conversion + " euros");
        break;
    case "PESO URUGUAYO":
        conversion = cantidad * 0.048;
        console.log("El monto ingresado en pesos " + cantidad + " es " + conversion + " pesos uruguayos");
        break;
    case "REAL":
        conversion = cantidad * 0.0060;
        console.log("El monto ingresado en pesos " + cantidad + " es " + conversion + " reales");
        break;
    case "GUARANI":
        conversion = cantidad * 8.9;
        console.log("El monto ingresado en pesos " + cantidad + " es " + conversion + " guaranies");
        break;
    case "BOLIVIANO":
        conversion = cantidad * 0.0084;
        console.log("El monto ingresado en pesos " + cantidad + " es " + conversion + " bolivianos");
        break;
    case "PESO CHILENO":
        conversion = cantidad * 1.13;
        console.log("El monto ingresado en pesos " + cantidad + " es " + conversion + " pesos chilenos");
        break;
    default:
        console.log("No se encontro esa divisa");
        break;
}

