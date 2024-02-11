let paises = ["Chile", "Uruguay", "Paraguay", "Brasil", "Bolivia"];

let select = document.createElement("select");

paises.forEach(function(pais, indice) {
    var option = document.createElement("option");
    option.textContent = `País: ${pais}`;
    option.value = indice;
    select.appendChild(option);
});

document.body.appendChild(select); 
