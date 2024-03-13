document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;

    // Realizar petición POST con AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 201) {
            var response = JSON.parse(xhr.responseText);
            // Simular la creación de un objeto Email y almacenarlo en un array
            var emails = [];
            var emailObj = { email: email, response: response };
            emails.push(emailObj);
            // Mostrar confirmación al usuario
            document.getElementById('confirmation').innerHTML = 'Correo electrónico enviado a ' + email;
        } else {
            console.error('Error al enviar el correo electrónico. Código de estado: ' + xhr.status);
        }
    };
    xhr.onerror = function() {
        console.error('Error de red al enviar el correo electrónico.');
    };
    xhr.send(JSON.stringify({ email: email }));
});