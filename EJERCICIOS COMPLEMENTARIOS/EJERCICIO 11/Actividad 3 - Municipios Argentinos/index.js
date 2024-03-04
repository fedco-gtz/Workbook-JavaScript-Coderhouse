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

    // Escuchar el evento change sobre el select de provincias
    $('#provincias').on('change', function() {
        // Obtener el ID de la provincia seleccionada
        var provinciaSeleccionada = $(this).val();
        
        // Limpiar select de municipios
        $('#municipios').empty();
        $('#municipios').append(`<option value="">Seleccione un municipio</option>`);

        // Solicitar los municipios de la provincia seleccionada
        if (provinciaSeleccionada !== '') {
            $.ajax({
                url: `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaSeleccionada}`,
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    // Iterar sobre cada municipio y agregarlo al select
                    $.each(data.municipios, function(index, municipio) {
                        $('#municipios').append(`<option value="${municipio.id}">${municipio.nombre}</option>`);
                    });
                },
                error: function(xhr, status, error) {
                    console.error('Error al obtener los municipios:', error);
                }
            });
        }
    });

    // Escuchar el evento change sobre el select de municipios
    $('#municipios').on('change', function() {
        // Obtener el municipio seleccionado
        var municipioSeleccionado = $(this).val();
        // Mostrar el municipio seleccionado en el div
        $('#municipiosLista').html(`Municipio seleccionado: ${municipioSeleccionado}`);
    });
});