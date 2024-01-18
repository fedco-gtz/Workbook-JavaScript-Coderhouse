let listadoEstudiantes = "";
let contador = 1;

do {
    let nombreEstudiante = prompt("Ingresa el nombre del estudiante " + contador + " del listado:" );
    listadoEstudiantes += contador + ". " + nombreEstudiante + "\n";
    contador++;
} while (contador <= 10);


console.log("Listado de estudiantes:\n" + listadoEstudiantes); 


