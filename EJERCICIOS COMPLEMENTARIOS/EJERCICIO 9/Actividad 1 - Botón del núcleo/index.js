document.addEventListener("DOMContentLoaded", function() {
    let btnNucleo = document.getElementById('btnNucleo');

    btnNucleo.addEventListener('click', function() {
        document.getElementById('output').innerText = '¡Presionastes el Botón!';
    });
});