const express = require('express')
const routes = express.Router()
let arquivo = require('../src/data/arquivo.json')
let books = arquivo.books
let autor = arquivo.author

routes.get('/books', (req, res) => {

   return res.json(arquivo.books)
})

routes.get('/book/:id', (req, res) => {
   const id = req.params.id

   let newArq = books.filter(element => {
      if((element.id == id)){
      return element
      }
   })

   res.send(newArq[0])
})

routes.post('/book', (req, res) => {
   let body = req.body
   
   books.push(body)

   return res.status(201).json(arquivo)
})

routes.delete('/book/:id', (req, res) => {
   const id = req.params.id
   
   let newArq = books.filter(element => {
      if(!(element.id == id))
      return element
   })
   
   arquivo.books = newArq

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
   
   books.splice(id - 1,1,newArq[0])

   return res.json(books)
})

// AUTHOR ROUTES

routes.get('/authors', (req, res) => {
   return res.json(arquivo.author)
})

routes.get('/author/:id', (req, res) => {
   const id = req.params.id

   let newArq = autor.filter(element => {
      if((element.id == id)){
      return element
      }
   })

   res.send(newArq[0])
})

routes.post('/author', (req, res) => {
   let body = req.body
   
   autor.push(body)

   return res.status(201).json(arquivo)
})

routes.delete('/author/:id', (req, res) => {
   const id = req.params.id
   
   let newArq = autor.filter(element => {
      if(!(element.id == id))
      return element
   })
   
   arquivo.author = newArq

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
   
   autor.splice(id - 1,1,newArq[0])

   return res.json(autor)
})

// Author-Book Routes

routes.post('/author-book/:idA/:idB', (req, res) => {
   
   const idAuth = req.params.idA
   const idBook = req.params.idB

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
   
      if(book[0].author == ''){
         book[0].author += author[0].nome
      } else { 
         book[0].author += `,${author[0].nome}`
      }

      if(author[0].book == ''){
         author[0].book += book[0].nome
      } else {
         author[0].book += `,${book[0].nome}`
      }

   return res.json(arquivo)
})

routes.delete('/author-book/:idA/:idB', (req, res) => {
   
   const idAuth = req.params.idA
   const idBook = req.params.idB
  
   let author = arquivo.author.filter(element => {
      if((element.id == idAuth)){
      return element.nome
      }
   })
   let book = arquivo.books.filter(element => {
      if((element.id == idBook)){
      return element.nome
      }
   })
   
   const bookArray = author[0].book.split(",");
   const iBook = bookArray.indexOf(book[0].nome)
  bookArray.splice(iBook,1)
   
   const authorArray = book[0].author.split(",")
   const iAuthor = authorArray.indexOf(author[0].nome)
  
  authorArray.splice(iAuthor,1)
    
   book[0].author = authorArray.toString()
   author[0].book = bookArray.toString()
  
   return res.json(arquivo)
})


module.exports = routes