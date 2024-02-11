document.addEventListener("DOMContentLoaded", function() {
    let asignaturas = ["Matemáticas", "Física", "Química", "Biología", "Historia"];

    let selectAsignatura = document.getElementById('selectAsignatura');

    asignaturas.forEach(function(asignatura, index) {
        let option = document.createElement('option');
        option.text = asignatura;
        option.value = index;
        selectAsignatura.add(option);
    });

    selectAsignatura.addEventListener('change', function() {
        let selectedOptionIndex = this.value;
        let selectedAsignatura = asignaturas[selectedOptionIndex];
        
        if (selectedOptionIndex !== "-1") {
            document.getElementById('output').innerText = 'Asignatura seleccionada: ' + selectedAsignatura;
        } else {
            document.getElementById('output').innerText = ''; 
        }
    });
});