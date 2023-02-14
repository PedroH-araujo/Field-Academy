const express = require('express')
const axios = require('axios')
const routes = express.Router()
let arquivo = require('../src/data/arquivo.json')


routes.get('/:offset/:limit', (req, resp) => {
   const offset = req.params.offset
   const limit = req.params.limit
   getChampion()
   async function getChampion(){
      const championListFull = await axios.get('http://ddragon.leagueoflegends.com/cdn/13.3.1/data/pt_BR/champion.json')
         .then(res => {
            return res.data
         })
      let champList = Object.values(championListFull.data).slice(offset,limit)
      resp.send(champList)
   } 
})

routes.get('/:name', (req, resp) => {
   const name = req.params.name
   getChampion()
   async function getChampion(){
      const championListFull = await axios.get('http://ddragon.leagueoflegends.com/cdn/13.3.1/data/pt_BR/champion.json')
         .then(res => {
            return res.data
         })
      let champList = Object.values(championListFull.data).filter( champ => {
         return champ.id.includes(name)
       })
      resp.send(champList)
   } 
})



module.exports = routes
