
const params = new URLSearchParams(window.location.search);
const cursoId = params.get('id');


// Localizaciones
// Portada y galeria
const portada = document.querySelector(".curso__imagenes__portada");
const galeria = document.querySelector(".curso__imagenes__galeria");

// titulo
const texto = document.querySelector(".curso__texto__seccion")
const titulo = document.querySelector(".curso__texto__titulo");
const precio = document.querySelector(".curso__texto__precio");


// Funcion para cambiar titulo

const generarPagina = curso => {
    // titulo
    titulo.innerHTML = curso.titulo;
    precio.innerHTML = `$${curso.precio}`;
    // Imagen
    portada.style.backgroundImage = `url(../src/curso-${curso.id}/1.jpeg)`;


    for (i=1; i <= curso.imagenes; i++){
        imagen = document.createElement("div");
        imagen.style.backgroundImage = `url(../src/curso-${curso.id}/${i}.jpeg)`
        galeria.appendChild(imagen)
        imagen.classList.add("curso__imagenes__galeria__imagen")
    }

    curso.secciones.forEach(seccion => {
        const seccionTitulo = document.createElement("h3");
        const seccionTexto = document.createElement("p");

        seccionTitulo.classList.add("curso__texto__seccion-titulo");
        seccionTexto.classList.add("curso__texto__seccion-texto");

        seccionTitulo.innerHTML = seccion.titulo;
        seccionTexto.innerHTML = seccion.contenido;

        texto.appendChild(seccionTitulo);
        texto.appendChild(seccionTexto);
    })

}

// Traer los cursos de data.json

async function obtenerCursos(){
    const url = "../data/data.json";
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`Estado de respuesta: ${respuesta.status}`);
        }
        const resultado = await respuesta.json();
        console.log(resultado);

        const curso = resultado.find(c => c.id == cursoId);

        if (curso) {
            generarPagina(curso)

        }


    }   catch (error){
        console.error(error.message)
    }
    

}

obtenerCursos();






