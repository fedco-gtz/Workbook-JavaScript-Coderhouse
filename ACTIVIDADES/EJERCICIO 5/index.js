function crearInputsEmpresas() {
    const cantidadEmpresasInput = document.getElementById('cantidad-empresas');
    const cantidadEmpresas = parseInt(cantidadEmpresasInput.value) || 0;

    const contenedorEmpresas = document.getElementById('contenedor-empresas');
    contenedorEmpresas.innerHTML = ""; // Limpiar contenido anterior

    const botonCompararPrecios = document.createElement('button');
    botonCompararPrecios.textContent = "Comparar precios";
    botonCompararPrecios.addEventListener('click', compararPrecios);

    cantidadEmpresas >= 2 && cantidadEmpresas <= 5 ?
        [...Array(cantidadEmpresas)].forEach((_, i) => {
            const inputNumeroEmpresa = document.createElement('input');
            inputNumeroEmpresa.type = "number";
            inputNumeroEmpresa.placeholder = `Número de empresa ${i + 1}`;
            inputNumeroEmpresa.min = "1";
            inputNumeroEmpresa.max = "5";
            contenedorEmpresas.appendChild(inputNumeroEmpresa);
        }) :
        alert("Ingrese una cantidad válida de empresas (entre 2 y 5).");

    document.getElementById('boton-comparar-precios').innerHTML = "";
    document.getElementById('boton-comparar-precios').appendChild(botonCompararPrecios);
}

function compararPrecios() {
    const cantidadEmpresasInput = document.getElementById('cantidad-empresas');
    const cantidadEmpresas = parseInt(cantidadEmpresasInput.value) || 0;
    const empresas = [
        { nombre: "Empresa A", precio: 500 },
        { nombre: "Empresa B", precio: 550 },
        { nombre: "Empresa C", precio: 480 },
        { nombre: "Empresa D", precio: 600 },
        { nombre: "Empresa E", precio: 520 }
    ];

    const contenedorMensajePrecio = document.getElementById('mensaje-precio');
    contenedorMensajePrecio.innerHTML = ""; // Limpiar contenido anterior

    // Encontrar el precio más bajo
    const precios = empresas.map(empresa => empresa.precio);
    const precioMasBajo = Math.min(...precios);

    [...Array(cantidadEmpresas)].forEach((_, i) => {
        const inputNumeroEmpresa = document.getElementById('contenedor-empresas').getElementsByTagName('input')[i];
        const numeroEmpresa = parseInt(inputNumeroEmpresa.value) || 0;

        const empresaSeleccionada = empresas.find(empresa => empresa.nombre === `Empresa ${numeroEmpresa}`);

        if (!empresaSeleccionada) {
            alert("El número de empresa ingresado no es válido.");
            return;
        }

        const empresaDiv = document.createElement('div');
        empresaDiv.textContent = `${empresaSeleccionada.nombre} - Precio: $${empresaSeleccionada.precio}`;

        // Resaltar el nombre de la empresa con el mejor precio
        empresaSeleccionada.precio === precioMasBajo && empresaDiv.classList.add('mejor-precio');

        contenedorMensajePrecio.appendChild(empresaDiv);
    });
}

document.getElementById('cantidad-empresas').addEventListener('change', crearInputsEmpresas);
