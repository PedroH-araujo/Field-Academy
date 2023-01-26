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
      removeBtn.push(itens.lastElementChild.lastElementChild)
      checkboxList.push(itens.lastElementChild.firstElementChild)
      novoItem.value = ''
      removeBtn.forEach(removeItem)
      checkboxList.forEach(checkItem)
      contagemDeItens()
      del()
   }
})
let itens = document.querySelector("#lista")

function criaItemLista(conteudo) {
   let item = document.createElement("li")
   item.classList.add("list-item")
   item.classList.add("item")
   item.classList.add("no-check")
   item.innerHTML = `
   <input type="checkbox" id="checkbox"> <p>${conteudo}</p> <img src="images/icon-cross.svg" id="del" >
   `
   listaItens.appendChild(item)
}

//Remover da Lista
let lista = []
let removeBtn = []
let listCheck = []
let listUnCheck = []

function removeItem(e, indice) {
   removeBtn[indice].addEventListener("click", () => {
      lista[indice].parentElement.removeChild(lista[indice])
      console.log(indice, e)
      contagemDeItens()
   })
}

function del(){
   const btnDel = document.querySelectorAll("#del")
   const item = document.querySelectorAll(".item")
   console.log(btnDel,item)
}


//Atualizar Lista

function atualizaLista(){
   let item = document.querySelectorAll(".item")
   listCheck = Array.from(item)
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

function checkItem(e, indice) {
   checkboxList[indice].addEventListener("change", () => {
      if(checkboxList[indice].checked) {
         // Checkbox está selecionado.
         lista[indice].classList.add("check")
         lista[indice].classList.remove("no-check")
      } else {
        lista[indice].classList.remove("check")
        lista[indice].classList.add("no-check")
         // Checkbox não está selecionado.
     }
      contagemDeItens()
   })
}

//Limpar os itens completos
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

function pegaItens(){
   const item = document.querySelectorAll(".item")

   Array.from(item).forEach(e => listUnCheck.push(e))
   Array.from(item).forEach(e => listCheck.push(e))
}

all.addEventListener("click", () => {
   listCheck.forEach(e => listaItens.appendChild(e))
   listUnCheck.forEach(e => listaItens.appendChild(e))
})

ativos.addEventListener("click", function noCheck() {
   pegaItens()
   let noCheck = listUnCheck.filter(e => e.classList.contains("no-check"))
   listaItens.innerHTML = ""
   noCheck.forEach(e => listaItens.appendChild(e))
})

completados.addEventListener("click", function complet() {
   pegaItens()
   let check = listCheck.filter(e => e.classList.contains("check"))
   listaItens.innerHTML = ""
   check.forEach(e => listaItens.appendChild(e))
})