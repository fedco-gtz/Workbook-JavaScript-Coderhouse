class Hamburguesa {
    constructor(nombre, precio, ingredientes, numeroCombo) {
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.numeroCombo = numeroCombo;
    };
};


const hamburguesa1 = new Hamburguesa("Hamburguesa clásica", 5.99, ["carne", "lechuga", "tomate", "cebolla", "queso"], 1);
const hamburguesa2 = new Hamburguesa("Hamburguesa doble", 7.99, ["doble carne", "lechuga", "tomate", "cebolla", "queso"], 2);
const hamburguesa3 = new Hamburguesa("Hamburguesa vegetariana", 6.49, ["vegetales", "lechuga", "tomate", "cebolla", "queso"], 3);
const hamburguesa4 = new Hamburguesa("Hamburguesa con bacon", 6.99, ["carne", "lechuga", "tomate", "cebolla", "queso", "bacon"], 4);
const hamburguesa5 = new Hamburguesa("Hamburguesa especial", 8.99, ["carne", "lechuga", "tomate", "cebolla", "queso", "huevo", "salsa especial"], 5);

const hamburguesasArray = [hamburguesa1, hamburguesa2, hamburguesa3, hamburguesa4, hamburguesa5];

localStorage.setItem('Hamburguesas', JSON.stringify(hamburguesasArray));

// PARA VERLO EN CONSOLA
console.log("Hamburguesas:");
hamburguesasArray.forEach(hamburguesa => {
    console.log(`Nombre: ${hamburguesa.nombre}, Precio: ${hamburguesa.precio}, Ingredientes: ${hamburguesa.ingredientes.join(", ")}, Número de Combo: ${hamburguesa.numeroCombo}`);
});