const opcion = prompt("¿Qué tipo de cotización deseas realizar? \n 1. Pesos a Dólares \n 2. Dólares a Pesos");

switch (opcion) {
    case "1":
        const pesos = parseFloat(prompt("Ingrese el valor en pesos argentinos:"));
        const resultadoDolar = cotizarDolar(pesos);
        console.log("El equivalente en dólares es: $" + resultadoDolar);
        break;
    case "2":
        const dolar = parseFloat(prompt("Ingrese el valor en dolares estadounidenses:"));
        const resultadoPesos = cotizarPesos(dolar);
        console.log("El equivalente en dólares es: $" + resultadoPesos);
        break;
    default:
        console.log("Opción no válida");
        break;
}


function cotizarDolar(pesos) {
    const tipoCambio = 0.0012;
    return pesos * tipoCambio;
}


function cotizarPesos(dolar) {
    const tipoCambio = 821.95;
    return dolar * tipoCambio;
}



















