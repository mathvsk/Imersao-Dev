function adicionarFilme() {
  var addfilme = document.querySelector('#filme')
  var filme = addfilme.value
  /*if (filme.endsWith('.jpg')) {
    listarFilmesNaTela(filme)
  } else {
    alert('Digite um valor válido')
  } */
  listarFilmesNaTela(filme)
  filme.value = ""
}
function listarFilmesNaTela(video) {
  var listaFilmes = document.querySelector('#listaFilmes')
  listaFilmes.innerHTML = listaFilmes.innerHTML + video
}