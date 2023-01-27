const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contato.Controller')

// Rotas da Home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// Rota para contato
route.get('/contato', contatoController.paginaInicial)


module.exports = route
