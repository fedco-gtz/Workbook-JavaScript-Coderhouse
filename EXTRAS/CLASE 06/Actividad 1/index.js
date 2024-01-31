const PERSONAS = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Luis", edad: 35 },
];

const EDAD = PERSONAS.map(persona => persona.edad);

console.log(EDAD);

const ARRAYSEPARADAS = [];

for (let i = 0; i < EDAD.length; i++) {
    ARRAYSEPARADAS[i] = [EDAD[i]];
};

ARRAYSEPARADAS.forEach((array, i) => {
    console.log(`Array ${i + 1}:`, array);
});

const SUMA = ARRAYSEPARADAS.reduce((resultado, array) => {
    return resultado.map((valor, index) => valor + (array[index] || 0));
}, Array(ARRAYSEPARADAS[0].length).fill(0));

console.log(`Suma de las arrays: ${SUMA}`);
console.log(`Promedio de la edad: ${SUMA/EDAD.length}`);