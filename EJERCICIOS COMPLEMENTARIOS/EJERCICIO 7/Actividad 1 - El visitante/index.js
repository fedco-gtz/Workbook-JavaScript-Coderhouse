let nombre = localStorage.getItem("nombre");

if (nombre === null) {
    nombre = prompt("Por favor, introduce tu nombre:");
    localStorage.setItem("nombre", nombre);
} else {
    alert("¡Hola, " + nombre + "!");
};