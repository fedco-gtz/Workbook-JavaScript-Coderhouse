let comidas = localStorage.getItem("comidas");

if (comidas === null) {
    const comida = [];
    for (let i = 0; i < 5; i++) {
        comida.push(prompt('INGRESAR COMIDA'))
    };
    localStorage.setItem("comidas", comida)
} else {
    let comida = '';
    const arrayComidas = comidas.split(',');
    for (const nombreComida of arrayComidas) {
        comida += nombreComida + '\n';
    };

    console.log(comida)
    alert(comida);
};

