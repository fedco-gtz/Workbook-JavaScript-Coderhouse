let numero = prompt("Ingresa un número entre 1 y 10");
let intento = "";
let numeroAleatorio = Math.random();
let adivinar = Math.floor(numeroAleatorio * 10) + 1;


console.log(adivinar);

while (adivinar != numero) {
    intento++;
    if (numero <= adivinar - 3) {
        console.log("El numero ingresado es muy chico, proba con otro numero");
        alert("El numero ingresado es muy chico, proba con otro numero")
        numero = prompt("Ingresa otro número entre 1 y 10");
    } else if (numero >= adivinar + 3) {
        console.log("El numero ingresado es muy grande");
        numero = prompt("Ingresa otro número entre 1 y 10");
    } else if (numero <= adivinar - 2 || numero <= adivinar - 1 || numero >= adivinar + 2 || numero >= adivinar + 1) {
        console.log("Estas muy cerca de adivinar, proba con otro numero");
        alert("Estas muy cerca de adivinar, proba con otro numero")
        numero = prompt("Ingresa otro número entre 1 y 10");
    } 
}

while (adivinar = numero){
    intento++;
    console.log("¡ADIVINASTE EL NÚMERO!");
    console.log("LO HICISTE EN " + intento + " INTENTOS");
        alert("¡ADIVINASTE EL NÚMERO!");
        alert("LO HICISTE EN " + intento + " INTENTOS");
        break;
}
