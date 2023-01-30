
//Primeira Requisição
async function requisicao() {
   const req = await fetch('http://localhost:3000/')
   const reqConvert = await req.json()
   reqConvert.forEach(element => {
      criaItemLista(element.nome,element.id,element.status)
   });
   lista = reqConvert
   list = Array.from(document.querySelectorAll('[data-id]'))
   console.log(reqConvert)
   return reqConvert
}

requisicao()

//Criar Item
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
let lastItem = conexaoConvertida[conexaoConvertida.length - 1]
criaItemLista(lastItem.nome,lastItem.id,lastItem.status)

list = Array.from(document.querySelectorAll('[data-id]'))
console.log(conexaoConvertida)
}


//Deletar um item
async function delet(id){
   const conexao = await fetch(`http://localhost:3000/${id}`, {
      method: 'DELETE'
})

const conexaoConvertida = await conexao.json()

}

//Atualizar um item
async function update(id,nome){
   const conexao = await fetch(`http://localhost:3000/${id}/${nome}`, {
      method: 'PUT',
})
const conexaoConvertida = await conexao.json()

}

//Dar check no item
async function checkItemApi(id,n) { 
   const conexao = await fetch(`http://localhost:3000/check/${id}/${n}`, {
      method: 'PUT',
 })
 const conexaoConvertida = await conexao.json()
 console.log(conexaoConvertida)
}