$(document).ready(() => {
    const $image = $('img');
    const $textContainer = $('#text-container');

    // Animación 1: Desvanecer la imagen
    $image.fadeOut(1000, () => {
        $textContainer.text("La imagen ha desaparecido").fadeIn(1000);

        // Animación 2: Rotar la imagen
        $image.animate({ rotate: '360deg' }, { duration: 1000, easing: 'easeInOutExpo' });
        $textContainer.text("La imagen ha rotado").delay(1000).fadeIn(1000);

        // Animación 3: Agrandar la imagen y cambiar el color del texto
        $image.animate({ width: '200px', height: '200px' }, 1000);
        $textContainer.text("La imagen ha sido agrandada").css('color', 'blue').fadeIn(1000);
    });
});
