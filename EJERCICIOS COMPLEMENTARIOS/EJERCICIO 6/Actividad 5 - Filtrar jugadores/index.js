// Actividad 3
class Jugador {
    constructor(nombre, numero, edad, lesion) {
        this.nombre = nombre;
        this.numero = numero;
        this.edad = edad;
        this.lesion = lesion;
    }
}

const jugadores = [];

jugadores.push(new Jugador("LIONEL MESSI", 10, 36, false));
jugadores.push(new Jugador("NICOLAS TAGLIAFICO", 3, 31, true));
jugadores.push(new Jugador("LEANDRO PAREDES", 5, 29, false));
jugadores.push(new Jugador("ANGEL DI MARIA", 11, 35, true));
jugadores.push(new Jugador("EMILIANO MARTINEZ", 1, 31, false));

console.log(jugadores);

// Actividad 5
function filtroJugadores(equipo, edad) {
    return equipo.filter(jugador => jugador.edad === edad);
};

for (let i = 0; i < 5; i++) {
    let edadFiltro = prompt(`Ingresa la edad para filtrar jugadores`);
    let jugadoresFiltrados = filtroJugadores(jugadores, parseInt(edadFiltro, 10));

    if (jugadoresFiltrados.length > 0) {
        console.log(`Jugadores con ${edadFiltro} años:`);
        jugadoresFiltrados.forEach(jugador => {
            console.log(`- ${jugador.nombre}, dorsal ${jugador.numero}`);
        });
    } else {
        console.log(`No hay jugadores con ${edadFiltro} años en el equipo.`);
    };
};
