fetch("/data/data.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    renderizarCursos(data);
  });

const contenedor = document.querySelector(".galeria__contenedor")

const renderizarCursos = cursos => {
    console.log(contenedor)

    cursos.forEach(curso => {
        // Crear elementos para cada curso
        const card = document.createElement("div");
        const img = document.createElement("div");
        const contenedorTexto = document.createElement("div");
        const titulo = document.createElement("a");
        const precio = document.createElement("p");
        const boton = document.createElement("button");

        // Dar clases a los elementos
        card.classList.add("galeria__contenedor__card");
        img.classList.add("galeria__contenedor__card__img");
        contenedorTexto.classList.add("galeria__contenedor__card__texto")
        titulo.classList.add("galeria__contenedor__card__titulo");
        precio.classList.add("galeria__contenedor__card__precio");
        boton.classList.add("galeria__contenedor__card__boton");

        //Llenar la informacion de cada objeto
        titulo.innerHTML = curso.titulo;
        titulo.href = `pages/curso.html?id=${curso.id}`
        precio.innerHTML = `$${curso.precio}`;
        boton.innerHTML = "Comprar";
        img.style.backgroundImage = `url(/../src/curso-${curso.id}/1.jpeg)`

        //Emparentar objetos
        contenedor.appendChild(card);
        card.appendChild(img);
        card.appendChild(contenedorTexto);
        contenedorTexto.appendChild(titulo);
        contenedorTexto.appendChild(precio);
        card.appendChild(boton);

        //Añadir dataset a card
        titulo.dataset.id = `${curso.id}`
    })   
}

contenedor.addEventListener("click", (event) => {
    console.log(event.target)
})