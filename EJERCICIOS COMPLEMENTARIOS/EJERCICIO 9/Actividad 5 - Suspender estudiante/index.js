class Estudiante {
    constructor(nombre, edad, carrera, promedio) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.promedio = promedio;
      this.suspendido = false;
    }
  
    suspender() {
      this.suspendido = true;
    }
  }
  
  const estudiantes = [
    new Estudiante("Juan", 20, "Ingeniería", 8.5),
    new Estudiante("María", 22, "Medicina", 9.2),
    new Estudiante("Pedro", 21, "Derecho", 7.8)
  ];
  
  const container = document.getElementById('estudiantes-container');
  
  estudiantes.forEach(estudiante => {
    const divEstudiante = document.createElement('div');
    divEstudiante.innerHTML = `
      <h2>${estudiante.nombre}</h2>
      <p>Edad: ${estudiante.edad}</p>
      <p>Carrera: ${estudiante.carrera}</p>
      <p>Promedio: ${estudiante.promedio}</p>
      <button class="seleccionar-btn">Seleccionar</button>
      <button class="suspender-btn">Suspender</button>
    `;
    
    divEstudiante.querySelector('.seleccionar-btn').addEventListener('click', () => {
      alert(`Estudiante seleccionado: ${estudiante.nombre}`);
    });
  
    divEstudiante.querySelector('.suspender-btn').addEventListener('click', () => {
      estudiante.suspender();
      divEstudiante.innerHTML += `<p>Estudiante ${estudiante.nombre} suspendido.</p>`;
    });
  
    container.appendChild(divEstudiante);
  });
  