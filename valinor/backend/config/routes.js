const express = require('express')
const axios = require('axios')
const routes = express.Router()
let arquivo = require('../src/data/arquivo.json')


routes.get('/', (req, res) => {
   axios.get('http://ddragon.leagueoflegends.com/cdn/13.3.1/data/pt_BR/champion.json')
      .then(res => {
         arquivo = res.data
      })
      setTimeout(() => {res.send(arquivo.data)}, 1000);
})

module.exports = routes
