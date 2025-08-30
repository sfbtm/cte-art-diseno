fetch("/../data/data.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    renderizarCursos(data);
  });

const renderizarCursos = cursos => {
    const contenedor = document.querySelector(".galeria__contenedor")
    console.log(contenedor)

    cursos.forEach(curso => {
        // Crear elementos para cada curso
        const card = document.createElement("div");
        const img = document.createElement("div");
        const titulo = document.createElement("p");
        const precio = document.createElement("p");
        const boton = document.createElement("button");

        // Dar clases a los elementos
        card.classList.add("galeria__contenedor__card");
        img.classList.add("galeria__contenedor__card__img");
        titulo.classList.add("galeria__contenedor__card__titulo");
        precio.classList.add("galeria__contenedor__card__precio");
        boton.classList.add("galeria__contenedor__card__boton");

        //Llenar la informacion de cada objeto
        titulo.innerHTML = curso.titulo

        //Emparentar objetos
        contenedor.appendChild(card);
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(precio);
        card.appendChild(boton);
    })
    
}