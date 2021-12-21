let name = String(prompt('Qual o seu nome: '))
  if (!name) {
    alert('Queremos te conhecer')
  }else {
    alert("Olá, " + name)
}

var titulo = document.getElementById('h1')
var cargo = document.getElementById('cargo')

titulo.addEventListener('click', change)
titulo.addEventListener('mouseenter', enter)
cargo.addEventListener('click', out)
cargo.addEventListener('mouseover', out)


function change() {
  titulo.innerHTML = `Seja Bem-Vindo, ${name}!`
}

function enter() {
  titulo.innerHTML = `Você está na ViUs`
}

function out() {
  cargo.innerHTML = `Não esqueça de acessar nosso menu,
   ${name}!`
}
