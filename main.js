var title = document.getElementById('h1')
var paragraph = document.getElementById('cargo')

function change() {
  title.innerHTML = `Seja Bem-Vindo!`
}

function changeParagraph() {
  paragraph.innerHTML = 'Acompanhe nossos projetos!'
}

title.addEventListener('mouseenter', change)
paragraph.addEventListener('mouseenter', changeParagraph)

