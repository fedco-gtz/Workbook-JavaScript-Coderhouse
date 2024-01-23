let forma = prompt("Ingresar la figura de la cual deseas calcular el área (cuadrado o tringulo)").toLowerCase();
let base = parseInt(prompt("Ingresar la medida de la base"));
let altura = parseInt(prompt("Ingresar la medida de la altura"));

let area = calcularArea(forma, base, altura);

function calcularArea(forma, base, altura) {
    let resultado;
    switch (forma) {
        case "cuadrado":
            resultado = base * altura;
            break;
        case "triangulo":
            resultado = (base * altura) / 2;
            break;
        default:
            console.log("Forma no reconocida");
            return;
    }

    console.log("El área del " + forma + " es: " + resultado + " m2");
};

