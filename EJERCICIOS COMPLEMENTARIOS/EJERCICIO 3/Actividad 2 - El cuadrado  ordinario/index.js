let numero = parseFloat(prompt("Ingresa un numero"));

if (isNaN(numero)) {
    prompt("Ingresa un numero valido");
} else {
    for (let i = 1; i <= numero; i++) {
        console.log("Repeticion " + i + ": LADO");
        alert("Repeticion " + i + ": LADO");
        if (i >= 4) {
            console.log("Se alcanzó el límite de 4 iteraciones. Ciclo cancelado.");
            // alert("Se alcanzó el límite de 4 iteraciones. Ciclo cancelado.");
            break;
        }
    }
}
