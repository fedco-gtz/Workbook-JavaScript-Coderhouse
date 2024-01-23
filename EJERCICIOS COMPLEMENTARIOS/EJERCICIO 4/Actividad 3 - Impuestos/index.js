for (let i = 0; i < 5; i++) {
    let impuesto = parseFloat(prompt("Ingresa el valor del impuesto " + (i + 1)));
    let porcentaje = parseFloat(prompt("Ingresa el interes correspondiente al impuesto " + (i + 1)));

    if (!isNaN(impuesto) && !isNaN(porcentaje)) {
        let resultado = totalImpuesto(impuesto, porcentaje);

        console.log("El impuesto " + (i+1) + " tiene un valor de $" + impuesto + " y un interes del " + porcentaje + " dando un total a abonar de: $" + resultado);
    } else {
        console.log("Error: Debes ingresar datos validos en el impuesto " + (i + 1));
        i--;
    }
};

function totalImpuesto(impuesto, porcentaje) {
        return (impuesto + (impuesto*porcentaje/100));
};


