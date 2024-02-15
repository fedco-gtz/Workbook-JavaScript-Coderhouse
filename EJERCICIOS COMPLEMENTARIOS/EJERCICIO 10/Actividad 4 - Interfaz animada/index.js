$(document).ready(function() {
    $('input[type="radio"]').on('click', function() {
      const animationType = $(this).val();
      
      // Detener animaciones anteriores
      $('#myImage').stop(true, true);
      
      // Realizar la animación seleccionada
      if (animationType === 'fadeIn') {
        $('#myImage').fadeIn();
      } else if (animationType === 'slideToggle') {
        $('#myImage').slideToggle();
      }
    });
  });
  

















