$(document).ready(function(){
    // Obtener listado de estudiantes de Hogwarts
    $.ajax({
        url: 'https://hp-api.herokuapp.com/api/characters/students',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            mostrarEstudiantes(data);
        },
        error: function(xhr, status, error) {
            console.error('Error al obtener los estudiantes:', error);
        }
    });

    // Escuchar el evento de cambio en el input de búsqueda
    $('#searchInput').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        // Filtrar estudiantes por nombre
        var filteredStudents = estudiantes.filter(function(student) {
            return student.name.toLowerCase().includes(searchTerm);
        });
        mostrarEstudiantes(filteredStudents);
    });

    // Función para mostrar estudiantes en la interfaz
    function mostrarEstudiantes(estudiantes) {
        $('#studentsList').empty();
        $.each(estudiantes, function(index, student) {
            var studentHTML = `
                <div class="student">
                    <h2>${student.name}</h2>
                    <p><strong>Casa:</strong> ${student.house}</p>
                    <p><strong>Patronus:</strong> ${student.patronus}</p>
                    <button class="selectBtn" data-name="${student.name}" data-house="${student.house}" data-patronus="${student.patronus}">Seleccionar</button>
                </div>
            `;
            $('#studentsList').append(studentHTML);
        });
    }

    // Escuchar el evento click sobre el botón "Seleccionar"
    $(document).on('click', '.selectBtn', function() {
        var name = $(this).data('name');
        var house = $(this).data('house');
        var patronus = $(this).data('patronus');
        mostrarInfoEstudiante(name, house, patronus);
    });

    // Función para mostrar la información del estudiante seleccionado
    function mostrarInfoEstudiante(name, house, patronus) {
        $('#studentName').text(`Nombre: ${name}`);
        $('#studentHouse').text(`Casa: ${house}`);
        $('#studentPatronus').text(`Patronus: ${patronus}`);
        $('#studentInfo').show();
        setTimeout(function() {
            $('#studentInfo').fadeOut();
        }, 3000);
    }
});