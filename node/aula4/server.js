const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended:true })) //Para poder tratar os POST
app.use(routes)

//CRUD      CREATE, READ, UPDATE, DELETE


app.listen(3000, () => {
   console.log("acesse http://localhost:3000")
   console.log("Escutando a porta 3000")
})