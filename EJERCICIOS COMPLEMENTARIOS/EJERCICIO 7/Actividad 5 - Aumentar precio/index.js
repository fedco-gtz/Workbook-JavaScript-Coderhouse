let hamburguesasGuardadas = JSON.parse(localStorage.getItem('hamburguesas'));

function aumentarPrecio(hamburguesas) {
    hamburguesas.forEach(hamburguesa => {
        hamburguesa.precio *= 1.3;
    });
}

aumentarPrecio(hamburguesasGuardadas);

localStorage.setItem('hamburguesas', JSON.stringify(hamburguesasGuardadas));
