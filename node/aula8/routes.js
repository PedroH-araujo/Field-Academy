const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contato.Controller')

// Rotas da Home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// Rota para contato
route.get('/contato', contatoController.paginaInicial)


module.exports = route
