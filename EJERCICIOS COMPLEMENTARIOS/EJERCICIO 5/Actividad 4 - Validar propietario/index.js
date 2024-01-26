/*
class Tienda {
    constructor(propietario) {
        this.propietario = propietario;
    };
    esPropietario(nombre) {
        return nombre === this.propietario;
    };
};

const TIENDA_UNO = new Tienda("Federico");
const nombresUsuario = [];

for (let i = 0; i < 5; i++) {
    const nombre = prompt("Ingrese un nombre:");
    nombresUsuario.push(nombre);
};

for (const nombreUsuario of nombresUsuario) {
    if (TIENDA_UNO.esPropietario(nombreUsuario)) {
        console.log(`${nombreUsuario} es propietario de la tienda.`);
        alert(`${nombreUsuario} es propietario de la tienda.`);
    } else {
        console.log(`${nombreUsuario} no es propietario de la tienda.`);
        alert(`${nombreUsuario} no es propietario de la tienda.`);
    };
}; 
*/

class Tienda {
    constructor(propietario) {
        this.propietario = propietario;
    };
    esPropietario(nombre) {
        return nombre === this.propietario;
    };
};

const TIENDA = new Tienda("Federico");

for (let i = 1; i <= 5; i++) {
    let nombreUsuario = prompt(`${i} - Ingrese un nombre:`);

    if (TIENDA.esPropietario(nombreUsuario)) {
        console.log(`${nombreUsuario} es propietario de la tienda.`);
        alert(`${nombreUsuario} es propietario de la tienda.`);
    } else {
        console.log(`${nombreUsuario} no es propietario de la tienda.`);
        alert(`${nombreUsuario} no es propietario de la tienda.`);
    }
}; 





















