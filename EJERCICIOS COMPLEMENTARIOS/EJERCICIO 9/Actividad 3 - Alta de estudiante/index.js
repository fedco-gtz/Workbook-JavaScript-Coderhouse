document.addEventListener("DOMContentLoaded", function() {
    let students = [];

    let studentForm = document.getElementById('studentForm');

    studentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let edad = document.getElementById('edad').value;
        let grado = document.getElementById('grado').value;

        let student = new Estudiante(nombre, edad, grado);

        students.push(student);

        document.getElementById('output').innerText = 'Estudiante registrado: ' + JSON.stringify(student);

        studentForm.reset();
    });

    // Definir la clase Estudiante
    function Estudiante(nombre, edad, grado) {
        this.nombre = nombre;
        this.edad = edad;
        this.grado = grado;
    }
});