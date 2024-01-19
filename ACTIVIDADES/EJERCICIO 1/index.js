/* E-COMMERCE DE PASAJES AEREOS Y COMPARACIÓN DE PRECIOS ENTRE CINCO EMPRESAS */

/* 1) Defino las variables para las empresas y sus precios */
let cantidadEmpresas = 0;

let empresaA = { nombre: "Empresa A", precio: 500 };
let empresaB = { nombre: "Empresa B", precio: 550 };
let empresaC = { nombre: "Empresa C", precio: 480 };
let empresaD = { nombre: "Empresa D", precio: 600 };
let empresaE = { nombre: "Empresa E", precio: 520 };

/* 2) Mensaje de Bienvenida a la plataforma */
console.log("¡Bienvenido al comparador de precios de pasajes aéreos!");

/* 3) Pido al usuario la cantidad de empresas a comparar (entre 2 y 5) */
while (cantidadEmpresas < 2 || cantidadEmpresas > 5 || isNaN(cantidadEmpresas)) {
    cantidadEmpresas = parseFloat(prompt("Ingrese la cantidad de empresas a comparar (entre 2 y 5):"));
    console.log("Vas a comparar el precio de " + cantidadEmpresas + " empresas.");
}

/* 4) Mediante el bucle for, comparo los precios de la cantidad de empresas seleccionadas */
for (let i = 0; i < cantidadEmpresas; i++) {
    const numeroEmpresa = parseFloat(prompt("Ingrese el número de la empresa " + (i + 1) + " (1-5):"));
    console.log(numeroEmpresa);

    let empresaActual;
    let nombreEmpresa;
    let precioActual;

    switch (numeroEmpresa) {
        case 1:
            empresaActual = empresaA;
            break;
        case 2:
            empresaActual = empresaB;
            break;
        case 3:
            empresaActual = empresaC;
            break;
        case 4:
            empresaActual = empresaD;
            break;
        case 5:
            empresaActual = empresaE;
            break;
        default:
            console.log("Número de empresa no válido. Por favor, ingrese un número válido.");
            i--;
            continue;
    }

    nombreEmpresa = empresaActual.nombre;
    precioActual = empresaActual.precio;

    if (precioActual < 500) {
        console.log(nombreEmpresa + " tiene un precio muy bajo: $" + precioActual);
    } else if (precioActual >= 500 && precioActual <= 550) {
        console.log(nombreEmpresa + " tiene un precio moderado: $" + precioActual);
    } else {
        console.log(nombreEmpresa + " tiene un precio elevado: $" + precioActual);
    }
}

/* 5) Muestro mensaje de despedida */
console.log("¡Gracias por utilizar nuestro comparador de precios!");




