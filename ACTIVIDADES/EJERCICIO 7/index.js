
document.addEventListener("DOMContentLoaded", function () {
    const productosLista = document.getElementById("productos-lista");
  
    fetch("productos.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        return response.json();
      })
      .then(data => {
        data.forEach(producto => {
          const li = document.createElement("li");
          li.textContent = `${producto.nombre} - Precio: ${producto.precio}`;
          productosLista.appendChild(li);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
  