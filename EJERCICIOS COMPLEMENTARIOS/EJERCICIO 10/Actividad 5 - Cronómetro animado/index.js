function cronometro(selector) {
    let contador = 0;
    
    setInterval(() => {
      contador++;
      
      // Animación para cambiar el contenido del cronómetro cada segundo
      $(selector).fadeOut(500, function() {
        $(this).text(contador).fadeIn(500);
      });
    }, 1000);
  }
  
  $(document).ready(function() {
    // Llamar a la función cronometro con el selector del contenedor del cronómetro
    cronometro('#cronometro');
  });
  