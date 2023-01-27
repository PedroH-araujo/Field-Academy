const express = require('express')
const app = express()

app.get('/', (req, res) => {
   res.send('HELLO WORLD')
})

app.get('/salve', (req, res) => {
   res.send('<h1>SALVE-SALVE</h1>')
})

app.listen(3000)