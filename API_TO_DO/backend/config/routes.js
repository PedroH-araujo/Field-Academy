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
   return res.status(201).json(arquivo)
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
      console.log(element)
      return element
      }
   })
   
   arquivo.splice(id,1,newArq[0])

   return res.json(arquivo)
})


routes.put('/check/:id/:n', (req, res) => {
   const id = req.params.id
   const nCheck = req.params.n

   let newArq = arquivo.filter(element => {
      if((element.id == id)){
         if(nCheck == 1){
            element.status = "check"
         } else {
            element.status = "no-check"

         }

         console.log(element)
         return element
      }
   })
   
   arquivo.splice(id,1,newArq[0])

   return res.json(arquivo)
})

module.exports = routes