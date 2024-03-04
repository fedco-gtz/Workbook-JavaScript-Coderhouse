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

    const precios = [];
    const nombresEmpresas = [];

    // Recopilar nombres de empresas y precios
    [...Array(cantidadEmpresas)].forEach((_, i) => {
        const inputNumeroEmpresa = document.getElementById('contenedor-empresas').getElementsByTagName('input')[i];
        const numeroEmpresa = parseInt(inputNumeroEmpresa.value) || 0;

        const empresaSeleccionada = empresas.find(empresa => empresa.nombre === `Empresa ${numeroEmpresa}`);

        if (!empresaSeleccionada) {
            alert("El número de empresa ingresado no es válido.");
            return;
        }

        nombresEmpresas.push(empresaSeleccionada.nombre);
        precios.push(empresaSeleccionada.precio);
    });

    // Crear el gráfico
    const ctx = document.getElementById('precio-chart').getContext('2d');
    const precioChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombresEmpresas,
            datasets: [{
                label: 'Precio',
                data: precios,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}