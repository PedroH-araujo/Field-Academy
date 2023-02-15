const express = require('express')
const axios = require('axios')
const routes = express.Router()
const db = require('../src/data/arquivo')
let dataChampions = false

async function createTable(s) {

   const query = "INSERT INTO champions (champ,tags) VALUES ($1,$2)"

   for (let i = 0; i < s.length; i++) {
      await db.query(query, [`${s[i].id}`, [s[i].tags[0], s[i].tags[1]]])
      console.log(`Foi ${i}`)
   }

   console.log('FOI TUDO')
}

async function showTable() {

   let result
   result = await db.query("SELECT * FROM champions")

   return result.rows
}

// async function countTable() {

//    let result
//    result = await db.query("SELECT COUNT(*) FROM champions")

//    return result.rows[0].count
// }

async function fatiaTable(id1,id2){
   let result
   result = await db.query(`SELECT champ,tags FROM champions WHERE id BETWEEN ${id1} AND ${id2}`)

   return result.rows
}

//CRIA MINHA DATABASE
routes.get('/', (req, response) => {

   getChampion()
   async function getChampion() {
      const championListFull = await axios.get('http://ddragon.leagueoflegends.com/cdn/13.3.1/data/pt_BR/champion.json')
         .then(res => {
            return res.data
         })
         let champList = Object.values(championListFull.data)
         if(dataChampions){
            createTable(champList)
            dataChampions = false
         }
         response.json('DataBase criada')
   }
})

//MANDA OS DADOS DA DATABASE REFERENTE A PAGINAÇÃO NO FRONT
routes.get('/:offset/:limit', (req, response) => {
   const offset = req.params.offset
   const limit = req.params.limit

   fatiaTable(offset,limit).then(rows => {
      response.send(rows)
   })
   
})


routes.get('/:name', (req, resp) => {
   const name = req.params.name
   getChampion()
   async function getChampion() {
      const championListFull = await axios.get('http://ddragon.leagueoflegends.com/cdn/13.3.1/data/pt_BR/champion.json')
         .then(res => {
            return res.data
         })
      let champList = Object.values(championListFull.data).filter(champ => {
         return champ.id.includes(name)
      })
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
