let s = {
   "author": [
     {
       "total": 1
     },
     {
       "id": "1",
       "nome": "RICK-Escritor",
       "book": "Livllllldfgdfgdf,awdawda"
     },
     {
      "id": "2",
      "nome": "JAJAJA-Escritor",
      "book": "Livllllldfgdfgdf,awdawda"
    }
   ],
   "books": [
     {
       "total": 2
     },
     {
       "id": "1",
       "nome": "Livllllldfgdfgdf",
       "author": "RICK-Escritor,Peter,JON"
     },
     {
       "id": "2",
       "nome": "awdawda",
       "author": "RICK-Escritor"
     }
   ]
 }

 const idAuth = 1
 const idBook = 2

 let author = s.author.filter(element => {
    if((element.id == idAuth)){
    return element.nome
    }
 })
 let book = s.books.filter(element => {
    if((element.id == idBook)){
    return element.nome
    }
 })
 
 const bookArray = author[0].book.split(",");
 const iBook = bookArray.indexOf(book[0].nome)
bookArray.splice(iBook,1)
 
 const authorArray = book[0].author.split(",")
 const iAuthor = authorArray.indexOf(author[0].nome)

console.log(authorArray)
console.log(iAuthor)
authorArray.splice(iAuthor,1)
console.log(authorArray)
 
 
 
 book[0].author = authorArray.toString()
 author[0].book = bookArray.toString()


 console.log(s);