class Cantante {
    constructor(id, nombre, banda, ingreso, egreso) {
        this.id = id;
        this.nombre = nombre;
        this.banda = banda;
        this.ingreso = ingreso;
        this.egreso = egreso;
    }
}

let cantantes = [
    new Cantante(1, "Peter Lanzani", "Teen Angels", 2007, 2012),
    new Cantante(2, "Lali Espósito", "Teen Angels", 2007, 2012),
    new Cantante(3, "Gastón Dalmau", "Teen Angels", 2007, 2012),
    new Cantante(4, "Nicolás Riera", "Teen Angels", 2007, 2012),
    new Cantante(5, "Rocío Igarzábal", "Teen Angels", 2011, 2012),
    new Cantante(6, "China Suárez", "Teen Angels", 2007, 2010),
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
            <button id="button_${cantante.id}">Contratar</button>
        `;
        document.body.appendChild(div);
    });
});

