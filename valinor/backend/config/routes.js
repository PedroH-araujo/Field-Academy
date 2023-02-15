const express = require('express')
const axios = require('axios')
const routes = express.Router()
const db = require('../src/data/arquivo')


async function createTable(s){
   await db.connect()

   // await db.query(`CREATE TABLE evento(
   //    id serial PRIMARY KEY,
   //    nome VARCHAR (20) UNIQUE NOT NULL
   // )`)

   const query = "INSERT INTO champions (champ,tags) VALUES ($1,$2)"

   for (let i = 0; i < s.length; i++) {
      await db.query(query, [`${s[i].id}`, [s[i].tags[0],s[i].tags[1]]])
      console.log(`Foi ${i}`)
   }

   // const mostra = await db.query(`SELECT * FROM public.evento`)

   await db.end()
   console.log('FOI TUDO')
}

async function showTable(){
   await db.connect()
   let result
   result = await db.query("SELECT * FROM champions")
   return result.rows
}


routes.get('/:offset/:limit', (req, resp) => {
   const offset = req.params.offset
   const limit = req.params.limit
   const dataChampions = true

   getChampion()
   async function getChampion(){
      const championListFull = await axios.get('http://ddragon.leagueoflegends.com/cdn/13.3.1/data/pt_BR/champion.json')
         .then(res => {
            return res.data
         })
      let champList = Object.values(championListFull.data)
      if(dataChampions){
         createTable(champList)
         dataChampions = false
      }
      showTable().then(e => resp.send(e))
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
