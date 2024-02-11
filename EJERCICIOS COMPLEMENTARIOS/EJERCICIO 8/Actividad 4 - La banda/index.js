class Cantante {
    constructor(nombre, banda, ingreso, egreso) {
        this.nombre = nombre;
        this.banda = banda;
        this.ingreso = ingreso;
        this.egreso = egreso;
    }
}

let cantantes = [
    new Cantante("Peter Lanzani", "Teen Angels", 2007, 2012),
    new Cantante("Lali Espósito", "Teen Angels", 2007, 2012),
    new Cantante("Gastón Dalmau", "Teen Angels", 2007, 2012),
    new Cantante("Nicolás Riera", "Teen Angels", 2007, 2012),
    new Cantante("Rocío Igarzábal", "Teen Angels", 2011, 2012),
    new Cantante("China Suárez", "Teen Angels", 2007, 2010),
];

document.addEventListener("DOMContentLoaded", function() {
    cantantes.forEach(function(cantante) {
        let div = document.createElement("div");
        let periodo = cantante.egreso - cantante.ingreso + 1;
        let ultimoAño = cantante.ingreso + periodo - 1;
        div.innerHTML = `
            <h2>${cantante.nombre}</h2>
            <p>Banda: ${cantante.banda}</p>
            <p>Periodo: ${cantante.ingreso} - ${cantante.egreso}</p>
            <p>Formó parte de la banda durante ${periodo} años (${cantante.ingreso} - ${ultimoAño})</p>
        `;
        document.body.appendChild(div);
    });
});







