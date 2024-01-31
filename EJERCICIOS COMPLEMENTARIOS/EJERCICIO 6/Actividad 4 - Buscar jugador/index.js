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

// Actividad 4
function buscarJugador(equipo, jugador) {
    return equipo.find(objeto => objeto.nombre === jugador.toUpperCase());
};

for (let i = 0; i < 3; i++) {
    let nombreJugador = prompt(`Ingresa el nombre del jugador que deseas buscar`);
    let busqueda = buscarJugador(jugadores, nombreJugador);

    if (busqueda !== undefined) {
        console.log(`El Jugador ${busqueda.nombre}, tiene ${busqueda.edad} años y siempre usa el dorsal ${busqueda.numero}`);
    } else {
        console.log(`No existe el jugador ${nombreJugador} en el equipo.`);
    };
};











