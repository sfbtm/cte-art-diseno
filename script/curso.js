const params = new URLSearchParams(window.location.search);
const cursoId = params.get('id');

console.log(cursoId)