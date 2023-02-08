const express = require('express')
const routes = express.Router()
let arquivo = require('../src/data/arquivo.json')
let books = arquivo.books
let autor = arquivo.author

routes.get('/books', (req, res) => {

   return res.json(arquivo.books)
})


routes.post('/book', (req, res) => {
   let body = req.body
   
   books.push(body)
   books[0].total += 1
   return res.status(201).json(arquivo)
})

routes.delete('/book/:id', (req, res) => {
   const id = req.params.id
   
   let newArq = books.filter(element => {
      if(!(element.id == id))
      return element
   })
   
   arquivo.books = newArq
   books[0].total -= 1
   return res.send(newArq)
})

routes.put('/book/:id/:name', (req, res) => {
   const id = req.params.id
   const name = req.params.name

   let newArq = books.filter(element => {
      if((element.id == id)){
      element.nome = name
      return element
      }
   })
   
   books.splice(id,1,newArq[0])

   return res.json(books)
})

// AUTHOR ROUTES

routes.get('/authors', (req, res) => {
   return res.json(arquivo)
})

routes.post('/author', (req, res) => {
   let body = req.body
   
   autor.push(body)
   autor[0].total += 1
   return res.status(201).json(arquivo)
})

routes.delete('/author/:id', (req, res) => {
   const id = req.params.id
   
   let newArq = autor.filter(element => {
      if(!(element.id == id))
      return element
   })
   
   arquivo.author = newArq
   autor[0].total -= 1
   return res.send(newArq)
})

routes.put('/author/:id/:name', (req, res) => {
   const id = req.params.id
   const name = req.params.name

   let newArq = autor.filter(element => {
      if((element.id == id)){
      element.nome = name
      return element
      }
   })
   
   autor.splice(id,1,newArq[0])

   return res.json(autor)
})

// Author-Book Routes

routes.post('/author-book/:id1/:id2', (req, res) => {
   const idAuth = req.params.id1
   const idBook = req.params.id2

   let author = autor.filter(element => {
      if((element.id == idAuth)){
      return element.nome
      }
   })
   let book = books.filter(element => {
      if((element.id == idBook)){
      return element.nome
      }
   })
   
   book[0].author = author[0].nome


   return res.json(arquivo)
})

routes.delete('/author-book/:id', (req, res) => {
   const id = req.params.id

   let newArq = books.filter(element => {
      if((element.id == id)){
      element.author = ''
      return element
      }
   })
   
   books.splice(id - 1,1,newArq[0])

   return res.json(arquivo)
})


module.exports = routes