let listado = "";
let numero;

do {
    numero = prompt("Ingresa un numero del 1 al 10 o ESC para finalizar");

    if (!isNaN(numero)) {
        switch (numero) {
            case "1":
                listado += "Tomate\n";
                break;
            case "2":
                listado += "Papa\n";
                break;
            case "3":
                listado += "Carne\n";
                break;
            case "4":
                listado += "Pollo\n";
                break;
            case "5":
                listado += "Pescado\n";
                break;
            case "6":
                listado += "Acelga\n";
                break;
            case "7":
                listado += "Lechuga\n";
                break;
            case "8":
                listado += "Morron\n";
                break;
            case "9":
                listado += "Zanahoria\n";
                break;
            case "10":
                listado += "Brocoli\n";
                break;
            default:
                console.log("Número no válido");
        }
    } else if (numero.toUpperCase() !== "ESC") {
        console.log("El caracter ingresado no es un numero");
        break;
    }
} while (numero.toUpperCase() !== "ESC");

console.log("Lista de las compras:\n" + listado);
