const ESTUDIANTES = [
    { nombre: "Guillermina", calificacion: 61 },
    { nombre: "María", calificacion: 25 },
    { nombre: "Celeste", calificacion: 100 },
    { nombre: "Federico", calificacion: 95 },
    { nombre: "Constanza", calificacion: 45 },
    { nombre: "Facundo", calificacion: 60 },
    { nombre: "Juan", calificacion: 50 },
    { nombre: "Sabrina", calificacion: 75 },
    { nombre: "Lisandro", calificacion: 42 },
    { nombre: "Milagros", calificacion: 88 },
    { nombre: "Diana", calificacion: 40 },
    { nombre: "Valentin", calificacion: 60 },
    { nombre: "Oscar", calificacion: 35 },
    { nombre: "Thiago", calificacion: 10 },

];
const APROBADOS = ESTUDIANTES.filter(estudiante => estudiante.calificacion >= 60);
console.log(APROBADOS);


