$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Iterar sobre cada publicación
            $.each(data, function(index, post) {
                // Crear estructura HTML para cada publicación
                var postHTML = `
                    <div class="post">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                `;
                // Agregar la estructura HTML al DOM
                $('#publicaciones').append(postHTML);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error al obtener las publicaciones:', error);
        }
    });
});