$(document).ready(function() {
    $('#inputNumber').on('input', function() {
      // Obtener el valor del input
      const inputValue = $(this).val();
      
      // Procesar el valor ingresado (por ejemplo, duplicarlo)
      const result = inputValue * 2;
      
      // Mostrar el resultado en el contenedor
      $('#result').text(result);
      
      // Mostrar la imagen con una animación
      $('#myImage').fadeIn(1000);
    });
  });
  