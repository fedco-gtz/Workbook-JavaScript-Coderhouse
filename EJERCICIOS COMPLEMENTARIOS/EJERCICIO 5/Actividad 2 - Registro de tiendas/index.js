class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = "";
        this.direccion = "";
        this.propietario = "";
        this.rubro = "";
    }
    registrar() {
        for (let i = 1; i <= 5; i++){
            this.nombre = prompt(`Ingresa el nombre de la tienda ${this.nombre}`);
            this.direccion = prompt(`Ingresa la dirección de la tienda ${this.direccion}`);
            this.propietario = prompt(`Ingresa el nombre del propietario de la tienda ${this.propietario}`);
            this.rubro = prompt(`Ingresa el rubro de la tienda ${this.rubro}`);


            console.log(`Datos de la tienda ${i}:`);
            console.log(`Nombre: ${this.nombre}`);
            console.log(`Dirección: ${this.direccion}`);
            console.log(`Propietario: ${this.propietario}`);
            console.log(`Rubro: ${this.rubro}`);
        }
    }
};

let TIENDA_UNO = new Tienda();

TIENDA_UNO.registrar();

