// const arq = require('../backend/src/data/arquivo.json')

async function requisicao() {
   const req = await fetch('http://localhost:3000/')
   const reqConvert = await req.json()
   reqConvert.forEach(element => {
      criaItemLista(element.nome,element.id)
   });
   lista = reqConvert
   list = document.querySelectorAll('[data-id]')
   console.log(reqConvert)
   return reqConvert
}

requisicao()


async function create(item) {

   const conexao = await fetch(`http://localhost:3000/add`, {
      method: 'POST',
      headers: {
         "Content-Type": 'application/json',
      },
      body: JSON.stringify(
         item
      )
})

const conexaoConvertida = await conexao.json()
console.log(conexaoConvertida)
}

async function delet(id){
   const conexao = await fetch(`http://localhost:3000/${id}`, {
      method: 'DELETE'
})

const conexaoConvertida = await conexao.json()
console.log(conexaoConvertida)
}

async function update(id,nome){
   const conexao = await fetch(`http://localhost:3000/${id}/${nome}`, {
      method: 'PUT',
})
const conexaoConvertida = await conexao.json()
console.log(id,nome)
}
