//Dark MODE
const sunBtn = document.querySelector(".sun")
const moonBtn = document.querySelector(".moon")

moonBtn.addEventListener("click", () => {
   const lista = document.querySelectorAll(".list-item")
   const controleList = document.querySelector(".select-status")
   document.body.classList.add("dark")
   lista.forEach(e => e.classList.add("dark-list"))
   controleList.classList.add("dark-list")
   moonBtn.style.display = "none"
   sunBtn.style.display = "inline"
})

sunBtn.addEventListener("click", () => {
   const lista = document.querySelectorAll(".list-item")
   const controleList = document.querySelector(".select-status")
   document.body.classList.remove("dark")
   lista.forEach(e => e.classList.remove("dark-list"))
   controleList.classList.remove("dark-list")
   sunBtn.style.display = "none"
   moonBtn.style.display = "inline"
})

//Adicionar na lista com ENTER
const novoItem = document.querySelector("#novoItem")
const listaItens = document.querySelector("#lista")

novoItem.addEventListener("keydown", function (event) {
   if (event.keyCode === 13) {
      criaItemLista(novoItem.value)
      let itens = document.querySelector("#lista")
      lista.push(itens.lastElementChild)
      novoItem.value = ''
      contagemDeItens()
   }
})
let itens = document.querySelector("#lista")

function criaItemLista(conteudo) {
   const detectaDark = document.body.classList.contains("dark")
   let item = document.createElement("li")
   item.classList.add("list-item")
   item.classList.add("item")
   item.classList.add("no-check")
   if(detectaDark){
      item.classList.add("dark-list")
   }
   item.innerHTML = `
   <img src="images/icon-check.svg " class="checkbox" onclick="checkElemento(this, this.parentNode)"> <p>${conteudo}</p> <img src="images/icon-cross.svg" id="del" onclick="deletaElemento(this.parentNode)">
   `
   listaItens.appendChild(item)
}

//Remover da Lista
let lista = []
let listCheck = []
let listUnCheck = []


  function deletaElemento(elemento) {
   elemento.remove()
   let x = (lista.indexOf(elemento))
   lista.splice(x,1)
   contagemDeItens()
  }


//Quantidade de itens faltando

const qntItens = document.querySelector("#iLeft")

function contagemDeItens() {
   let item = document.querySelectorAll(".item").length
   let checkedElements = document.getElementsByClassName("check").length
   qntItens.innerHTML = `${item - checkedElements} itens left`
}

//Dar CHECK nos itens
let checkboxList = []


function checkElemento(filho, pai) {
   if(!filho.classList.contains("checado")){
   filho.setAttribute('id','check')
   pai.classList.add("check")
   pai.classList.remove("no-check")
   filho.classList.add("checado")
   console.log("chek")
   }
   else {
   filho.removeAttribute('id','check')
   pai.classList.add("no-check")
   pai.classList.remove("check")
   filho.classList.remove("checado")
   console.log("no-chek")
   }
   contagemDeItens()
}


const clear = document.querySelector("#limpaCheck")

clear.addEventListener("click", function check() {
   let checkedElements = document.getElementsByClassName("check")
   Array.from(checkedElements).forEach(e => listCheck.push(e))
   Array.from(checkedElements).forEach(e => e.parentElement.removeChild(e))
})

//Status dos itens
const all = document.querySelector("#todos")
const ativos = document.querySelector("#ativos")
const completados = document.querySelector("#completados")


listaItens.addEventListener("click", () => {
   let item = document.querySelectorAll(".item")

})

function pegaItens(){
   listCheck = lista.filter(e => e.classList.contains("check"))
   listUnCheck = lista.filter(e => e.classList.contains("no-check"))
   console.log(listCheck,listUnCheck)

}

all.addEventListener("click", () => {
   lista.forEach(e => listaItens.appendChild(e))
   all.classList.add("active")
   ativos.classList.remove("active")
   completados.classList.remove("active")
})

ativos.addEventListener("click", function noCheck() {
   pegaItens()
   listaItens.innerHTML = ""
   listUnCheck.forEach(e => listaItens.appendChild(e))
   ativos.classList.add("active")
   completados.classList.remove("active")
   all.classList.remove("active")
})

completados.addEventListener("click", function complet() {
   pegaItens()
   listaItens.innerHTML = ""
   listCheck.forEach(e => listaItens.appendChild(e))
   completados.classList.add("active")
   ativos.classList.remove("active")
   all.classList.remove("active")
})
