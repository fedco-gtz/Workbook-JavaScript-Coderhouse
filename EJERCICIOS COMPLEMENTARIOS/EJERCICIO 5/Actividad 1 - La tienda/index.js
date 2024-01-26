class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    };
    imprimir() {
        console.log(`La tienda se llama ${this.nombre} se encuentra en ${this.direccion}, su propietario es ${this.propietario} y se dedican al rubro ${this.rubro}`);
    };
};

const TIENDA_UNO = new Tienda ("Gasolero", "Quilmes 1514", "Federico", "Kiosco");
const TIENDA_DOS = new Tienda ("Bebe", "Flores 498", "Cristian", "Almacen");
const TIENDA_TRES = new Tienda ("Dionisias", "30 de septiembre 3450", "Romina", "Panaderia");

TIENDA_UNO.imprimir();
TIENDA_DOS.imprimir();
TIENDA_TRES.imprimir();