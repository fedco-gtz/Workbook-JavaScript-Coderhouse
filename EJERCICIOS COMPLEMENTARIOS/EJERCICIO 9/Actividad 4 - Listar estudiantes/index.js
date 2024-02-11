const estudiantes = [
    { nombre: "Juan", edad: 20, carrera: "Ingeniería", promedio: 8.5 },
    { nombre: "María", edad: 22, carrera: "Medicina", promedio: 9.2 },
    { nombre: "Pedro", edad: 21, carrera: "Derecho", promedio: 7.8 }
];

const crearEstructuraEstudiante = (estudiante) => {
    const divEstudiante = document.createElement('div');
    divEstudiante.innerHTML = `
      <h2>${estudiante.nombre}</h2>
      <p>Edad: ${estudiante.edad}</p>
      <p>Carrera: ${estudiante.carrera}</p>
      <p>Promedio: ${estudiante.promedio}</p>
      <button class="seleccionar-btn">Seleccionar</button>
    `;

    divEstudiante.querySelector('.seleccionar-btn').addEventListener('click', () => {
        alert(`Estudiante seleccionado: ${estudiante.nombre}`);
    });

    return divEstudiante;
};

estudiantes.forEach((estudiante) => {
    const estructuraEstudiante = crearEstructuraEstudiante(estudiante);
    document.body.appendChild(estructuraEstudiante);
});


















