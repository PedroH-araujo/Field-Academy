let x = {  
   "author": 
   [
      { "id": 1,
      "nome": "RICK-ESCRITOR",
      "book": ""
   },
   { "id": 2,
      "nome": "MORTY-UM-CARA",
      "book ": ""
   }

   ],
   "books":
   [
      { "id": 1,
      "nome": "harry-livro",
      "author": ""
   },
   { "id": 2,
      "nome": "POTER-livro",
      "author": ""
   }

   ]
}

const idAuth = 2
const idBook = 2

let author = x.author.filter(element => {
   if((element.id == idAuth)){
   return element.nome
   }
})
let book = x.books.filter(element => {
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

console.log(x)