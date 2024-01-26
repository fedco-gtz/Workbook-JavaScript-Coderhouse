class Cliente {
    constructor(nombre, presupuesto, descuento, telefono) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.descuento = descuento;
        this.telefono = telefono;
    };
    transferirDinero(valor) {
        if (this.presupuesto > 0 && valor <= this.presupuesto) {
            this.presupuesto -= valor;
            return valor;
        } else {
            return 0;
        };
    };
};

const CLIENTE_UNO = new Cliente("Federico", 1000, true, "11 1234 1234");
const CLIENTE_DOS = new Cliente("Pedro", 1500, false, "11 2345 2345");
const CLIENTE_TRES = new Cliente("Oscar", 2000, true, "11 3456 3456");

for (let i = 1; i <= 5; i++) {
    const MONTO_INGRESADO = parseFloat(prompt(`Ingrese el monto ${i}:`));

    if (CLIENTE_UNO.transferirDinero(MONTO_INGRESADO)) {
        console.log(`${CLIENTE_UNO.nombre} tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
        alert(`${CLIENTE_UNO.nombre} tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
    } else {
        console.log(`${CLIENTE_UNO.nombre} no tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
        alert(`${CLIENTE_UNO.nombre} no tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
    }; 
    
    if (CLIENTE_DOS.transferirDinero(MONTO_INGRESADO)) {
        console.log(`${CLIENTE_DOS.nombre} tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
        alert(`${CLIENTE_DOS.nombre} tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
    } else {
        console.log(`${CLIENTE_DOS.nombre} no tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
        alert(`${CLIENTE_DOS.nombre} no tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
    }; 
    
    if (CLIENTE_TRES.transferirDinero(MONTO_INGRESADO)) {
        console.log(`${CLIENTE_TRES.nombre} tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
        alert(`${CLIENTE_TRES.nombre} tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
    } else {
        console.log(`${CLIENTE_TRES.nombre} no tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
        alert(`${CLIENTE_TRES.nombre} no tiene presupuesto suficiente para transferir $${MONTO_INGRESADO}.`);
    };
};

