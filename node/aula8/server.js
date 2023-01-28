require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.set('strictQuery', true)
mongoose.connect(process.env.CONNECTIONSTRING)
   .then(() => {
      app.emit('pronto')
      console.log('conexão feita')
   })
   .catch(e => console.log(e))

const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended:true })) //Para poder tratar os POST

app.use(express.static('./public'))

app.set('views','./src/views' ) // path.resolve(__dirname, 'src', 'views')) -> caminho absoluto
app.set('view engine', 'ejs')

app.use(routes)

//CRUD      CREATE, READ, UPDATE, DELETE

app.on('pronto', () => {
   app.listen(3000, () => {
      console.log("acesse http://localhost:3000")
      console.log("Escutando a porta 3000")
   })
})