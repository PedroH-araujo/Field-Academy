const express = require('express')
const app = express()

app.use(express.urlencoded({ extended:true })) //Para poder tratar os POST

app.get('/', (req, res) => {
   res.send(`
   <form action ="/" method="POST">
   Nome: <input type="text" name ="nome">
   <button>MANDAR</button>
   </form>
   `)
})

app.get('/test/:idUser?', (req, res) => { //http://localhost:3000/test/157?nome=Pedro&idadde=25
   console.log(req.params) //COISAS DEPOIS DO / -> 157
   console.log(req.query)  //COISAS DEPOIS DO ? -> {nome: Pedro, idade: 25}
   res.send('OI')
})

app.get('/salve', (req, res) => {
   res.send('<h1>SALVE-SALVE</h1>')
})

app.post('/', (req, res) => {
   console.log(req.body)
   res.send(`Voce me enviou ${req.body.nome}`)
})

//CRUD      CREATE, READ, UPDATE, DELETE


app.listen(3000, () => {
   console.log("acesse http://localhost:3000")
   console.log("Escutando a porta 3000")
})