const express = require('express')
const app = express()

app.get('/', (req, res) => {
   res.send(`
   
   `)
})

app.get('/salve', (req, res) => {
   res.send('<h1>SALVE-SALVE</h1>')
})

app.post('/', (req, res) => {
   res.send('JAJA TE RESPONDO')
})

//CRUD      CREATE, READ, UPDATE, DELETE


app.listen(3000, () => {
   console.log("acesse http://localhost:3000")
   console.log("Escutando a porta 3000")
})