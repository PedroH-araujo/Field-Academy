const express = require('express')
const routes = express.Router()
let arquivo = require('../src/data/arquivo.json')


routes.get('/', (req, res) => {
   return res.json(arquivo)
})

routes.post('/add', (req, res) => {
   let body = req.body
   
   arquivo.push(body)
   console.log(req.body)
   return res.status(201).json(body)
})

routes.delete('/:id', (req, res) => {
   const id = req.params.id
   
   let newArq = arquivo.filter(element => {
      if(!(element.id == id))
      return element
   })
   
   arquivo = newArq
   
   return res.send(newArq)
})

routes.put('/:id/:name', (req, res) => {
   const id = req.params.id
   const name = req.params.name

   let newArq = arquivo.filter(element => {
      if((element.id == id)){
      element.nome = name
      return element
      }
   })
   
   arquivo.splice(0,1,newArq)
   
   return res.send(`Item de indice ${id} foi atualizado`)
   
})


module.exports = routes