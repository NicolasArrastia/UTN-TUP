const listaCategorias = document.getElementById("lista-categorias");
const contenedorProductos = document.getElementById("contenedor-productos");

const cargarCategorias = () => {
  categorias.forEach((categoria) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <a href="#">${categoria}</a>
    `;

    listaCategorias.appendChild(li);
  });
};

const cargarProductos = () => {
  productos.forEach((producto) => {
    const article = document.createElement("article");

    article.classList.add("tarjeta-producto");

    article.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">

      <div class="tarjeta-producto-contenido">
        <h3>${producto.nombre}</h3>

        <p>${producto.descripcion}</p>

        <p class="precio">$${producto.precio}</p>

        <button>Agregar</button>
      </div>
    `;

    const boton = article.querySelector("button");

    boton.addEventListener("click", () => {
      alert(`Agregaste: ${producto.nombre}`);
    });

    contenedorProductos.appendChild(article);
  });
};

cargarCategorias();
cargarProductos();
