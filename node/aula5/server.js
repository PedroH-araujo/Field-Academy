const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')


app.use(express.urlencoded({ extended:true })) //Para poder tratar os POST
app.set('views','./src/views' ) // path.resolve(__dirname, 'src', 'views')) -> caminho absoluto
app.set('view engine', 'ejs')


app.use(routes)

//CRUD      CREATE, READ, UPDATE, DELETE


app.listen(3000, () => {
   console.log("acesse http://localhost:3000")
   console.log("Escutando a porta 3000")
})