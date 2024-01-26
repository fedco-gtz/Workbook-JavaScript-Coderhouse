class Tienda {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    imprimir() {
        return `La tienda ${this.nombre}`;
    }
    
    estaAbierto(hora) {
        hora = parseInt(hora);
        return (hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19);
    }
}

let tiendaUno = new Tienda("Gasolero");

for (let i = 1; i <= 3; i++) {
    let horaIngresada = prompt(`Ingrese la hora (formato de 24 horas):`);
    let mensaje = tiendaUno.imprimir();

    if (tiendaUno.estaAbierto(horaIngresada)) {
        mensaje += `, está abierta en la hora ${horaIngresada}.`;
    } else {
        mensaje += `, está cerrada en la hora ${horaIngresada}.`;
    }

    alert(mensaje);
    console.log(mensaje);
}
