// Espera a que el documento esté listo
$(document).ready(function() {
    // Define las animaciones
    const animacion1 = {
      left: '200px',
      top: '200px',
      opacity: 0.5
    };

    const animacion2 = {
      left: '0px',
      top: '0px',
      opacity: 1
    };

    // Realiza las animaciones encadenadas
    $('#image')
      .animate(animacion1, 1000)
      .animate(animacion2, 1000);
  });