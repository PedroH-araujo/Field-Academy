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
      let itens = document.querySelector("#lista")
      lista.push(itens.lastElementChild)
      let nums = {
         id: lista.length - 1,
         nome: novoItem.value,
         status: "no-check"
      }
      create(nums)
      novoItem.value = ''
      contagemDeItens()
   }
})
let itens = document.querySelector("#lista")

function criaItemLista(conteudo,id,status) {
   const detectaDark = document.body.classList.contains("dark")
   let item = document.createElement("li")
   item.classList.add("list-item")
   item.classList.add("item")
   if(status == "check"){
      item.classList.add("check")
      item.innerHTML = `
      <img src="images/icon-check.svg " class="checkbox checado" onclick="checkElemento(this, this.parentNode)" id="check"> <img src="images/updating.png" class="update" onclick="updateElement(this.parentNode)"> <p>${conteudo}</p> <img src="images/icon-cross.svg" id="del" onclick="deletaElemento(this.parentNode)">
      </li>
      `
   }else {
      item.classList.add("no-check")
      item.innerHTML = `
      <img src="images/icon-check.svg " class="checkbox" onclick="checkElemento(this, this.parentNode)"> <img src="images/updating.png" class="update" onclick="updateElement(this.parentNode)"> <p>${conteudo}</p> <img src="images/icon-cross.svg" id="del" onclick="deletaElemento(this.parentNode)">
      `
   }
   item.setAttribute('data-id', id)
   if(detectaDark){
      item.classList.add("dark-list")
   }
   listaItens.appendChild(item)
   contagemDeItens()
}

//Remover da Lista
let lista = []
let listCheck = []
let listUnCheck = []


  function deletaElemento(elemento) {
   elemento.remove()
   delet(elemento.getAttribute("data-id"))
   let i = list.indexOf(elemento)
   list.splice(i,1)
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
   checkItemApi(pai.getAttribute("data-id"),1)

   }
   else {
   filho.removeAttribute('id','check')
   pai.classList.add("no-check")
   pai.classList.remove("check")
   filho.classList.remove("checado")
   checkItemApi(pai.getAttribute("data-id"),0)

   }
   contagemDeItens()
}

//Limpa os completos da lista
const clear = document.querySelector("#limpaCheck")

clear.addEventListener("click", function check() {
   let checkedElements = document.getElementsByClassName("check")
   Array.from(checkedElements).forEach(e => listCheck.push(e))
   Array.from(checkedElements).forEach(e => e.parentElement.removeChild(e))
   ativos.classList.add("active")
   completados.classList.remove("active")
   all.classList.remove("active")
})

//Status dos itens
const all = document.querySelector("#todos")
const ativos = document.querySelector("#ativos")
const completados = document.querySelector("#completados")

function pegaItens(){

   listCheck = list.filter(e => e.classList.contains("check"))
   listUnCheck = list.filter(e => e.classList.contains("no-check"))

}

all.addEventListener("click", () => {
   pegaItens()
   list.forEach(e => listaItens.appendChild(e))
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

//atualizar item

let att = document.querySelector('.update')

function updateElement(element){
   element.querySelector('p').innerHTML = novoItem.value
   Array.from(list).splice(Array.from(list).indexOf(element), 1, element)
   update(Array.from(list).indexOf(element), novoItem.value)
   novoItem.value = ""
}
