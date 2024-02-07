let hamburguesasGuardadas = localStorage.getItem('hamburgesas');

if (hamburguesasGuardadas != null) {
let arregloHamburguesas = JSON.parse(hamburguesasGuardadas);
let mostrar = `SELECICIONAR HAMBURGUESA \n `;
for (let i = 0; i < arregloHamburguesas.length; i++) {
    mostrar += i + ` -> ` + arregloHamburguesas[i].nombre + ` ` + arregloHamburguesas[i].ingredientes + ` $ ` + arregloHamburguesas[i].precio + `\n`;
};
alert(mostrar);
let eleccion = parseInt(prompt('INGRESAR HAMBURGUESA '));
if ((eleccion >= 0) && (eleccion < arregloHamburguesas.length)) {
    alert("HAMBURGUESA SELECCIONADA  " + arregloHamburguesas[eleccion].nombre)
} else {
    alert("ERROR DE SELECCION ");
}};





















