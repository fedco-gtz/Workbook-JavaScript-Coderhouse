const palabras = ["hola", "mundo", "Js", "hola", "programacion", "mundo", "hola", "Js", "Js"];

function contarPalabras(arrPalabras) {
    const contador = {};
  
    arrPalabras.forEach(palabra => {
      if (contador[palabra]) {
        contador[palabra]++;
      } else {
        contador[palabra] = 1;
      }
    });
  
    return contador;
  }
  


  const resultado = contarPalabras(palabras);
  
  console.log(resultado);
  