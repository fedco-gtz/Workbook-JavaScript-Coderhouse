let ciudades = ["Temperley", "Turdera", "Llavallol", "Lomas de Zamora", "Banfield"];

ciudades.forEach(function (ciudad) {
    let h2 = document.createElement("h2");
    h2.textContent = ciudad;
    document.body.appendChild(h2);
});