class Jugador {
    constructor(nombre, numero, edad, lesion) {
        this.nombre = nombre;
        this.numero = numero;
        this.edad = edad;
        this.lesion = lesion;
    };
};

const jugadores = [];

jugadores.push(new Jugador("Lionel Messi", 10, 36, false));
jugadores.push(new Jugador("Nicolas Tagliafico", 3, 31, true));
jugadores.push(new Jugador("Leandro Paredes", 5, 29, false));
jugadores.push(new Jugador("Angel Di Maria", 11, 35, true));
jugadores.push(new Jugador("Emiliano Martinez", 1, 31, false));

console.log(jugadores);
