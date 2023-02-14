const express = require('express')
const axios = require('axios')
const routes = express.Router()



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
      let { id } = champList[2]
      let { tags } = champList[2]
      resp.send(`"id":"${id}","tags":"${tags}"`)
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


// routes.get('/details', (req, resp) => {
//    const name = req.params.name
//    getChampion()
//    async function getChampion(){
//       const championListFull = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.3.1/data/pt_BR/$champion.json`)
//          .then(res => {
//             return res.data
//          })
//       let champList = Object.values(championListFull.data)
//       resp.send(champList')
//    } 
// })


module.exports = routes
