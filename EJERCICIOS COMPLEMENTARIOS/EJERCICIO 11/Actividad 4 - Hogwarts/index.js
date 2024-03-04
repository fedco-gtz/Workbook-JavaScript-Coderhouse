$(document).ready(function(){
    // Obtener listado de estudiantes de Hogwarts
    $.ajax({
        url: 'https://hp-api.herokuapp.com/api/characters/students',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Iterar sobre cada estudiante y agregarlo al DOM
            $.each(data, function(index, student) {
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

            // Escuchar el evento click sobre el botón "Seleccionar"
            $('.selectBtn').on('click', function() {
                var name = $(this).data('name');
                var house = $(this).data('house');
                var patronus = $(this).data('patronus');
                mostrarInfoEstudiante(name, house, patronus);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error al obtener los estudiantes:', error);
        }
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
















