function crearInputsEmpresas() {
    const cantidadEmpresasInput = document.getElementById('cantidad-empresas');
    const cantidadEmpresas = parseInt(cantidadEmpresasInput.value);

    if (cantidadEmpresas < 2 || cantidadEmpresas > 5 || isNaN(cantidadEmpresas)) {
        alert("Ingrese una cantidad válida de empresas (entre 2 y 5).");
        return;
    }

    const contenedorEmpresas = document.getElementById('contenedor-empresas');
    contenedorEmpresas.innerHTML = ""; // Limpiar contenido anterior

    for (let i = 0; i < cantidadEmpresas; i++) {
        const inputNumeroEmpresa = document.createElement('input');
        inputNumeroEmpresa.type = "number";
        inputNumeroEmpresa.placeholder = "Número de empresa " + (i + 1);
        inputNumeroEmpresa.min = "1";
        inputNumeroEmpresa.max = "5";
        contenedorEmpresas.appendChild(inputNumeroEmpresa);
    }

    const botonCompararPrecios = document.createElement('button');
    botonCompararPrecios.textContent = "Comparar precios";
    botonCompararPrecios.addEventListener('click', compararPrecios);
    document.getElementById('boton-comparar-precios').innerHTML = "";
    document.getElementById('boton-comparar-precios').appendChild(botonCompararPrecios);
}

function compararPrecios() {
    const cantidadEmpresasInput = document.getElementById('cantidad-empresas');
    const cantidadEmpresas = parseInt(cantidadEmpresasInput.value);
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
    let precioMasBajo = Number.MAX_SAFE_INTEGER;
    empresas.forEach(empresa => {
        if (empresa.precio < precioMasBajo) {
            precioMasBajo = empresa.precio;
        }
    });

    for (let i = 0; i < cantidadEmpresas; i++) {
        const inputNumeroEmpresa = document.getElementById('contenedor-empresas').getElementsByTagName('input')[i];
        const numeroEmpresa = parseInt(inputNumeroEmpresa.value);

        if (numeroEmpresa < 1 || numeroEmpresa > empresas.length) {
            alert("El número de empresa ingresado no es válido.");
            return;
        }

        const empresaSeleccionada = empresas[numeroEmpresa - 1];
        const empresaDiv = document.createElement('div');
        empresaDiv.textContent = empresaSeleccionada.nombre + " - Precio: $" + empresaSeleccionada.precio;

        // Resaltar el nombre de la empresa con el mejor precio
        if (empresaSeleccionada.precio === precioMasBajo) {
            empresaDiv.classList.add('mejor-precio');
        }

        contenedorMensajePrecio.appendChild(empresaDiv);
    }
}

document.getElementById('cantidad-empresas').addEventListener('change', crearInputsEmpresas);

