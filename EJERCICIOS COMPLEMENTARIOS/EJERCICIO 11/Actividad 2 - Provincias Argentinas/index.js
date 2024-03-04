$(document).ready(function(){
    // Obtener listado de provincias
    $.ajax({
        url: 'https://apis.datos.gob.ar/georef/api/provincias',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Iterar sobre cada provincia y agregarla al select
            $.each(data.provincias, function(index, provincia) {
                $('#provincias').append(`<option value="${provincia.id}">${provincia.nombre}</option>`);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error al obtener las provincias:', error);
        }
    });

    // Escuchar el evento change sobre el select
    $('#provincias').on('change', function() {
        // Obtener el valor seleccionado
        var provinciaSeleccionada = $(this).val();
        // Mostrar la provincia seleccionada en el div
        $('#provinciaSeleccionada').html(`Provincia seleccionada: ${provinciaSeleccionada}`);
    });
});