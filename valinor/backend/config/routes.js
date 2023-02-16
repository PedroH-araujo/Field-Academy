const express = require('express')
const axios = require('axios')
const routes = express.Router()
const db = require('../src/data/arquivo')
let dataChampions = false

async function createTable(listChampions) {

   const query = "INSERT INTO champions (name,title,tags,passiveImage,passiveName,passiveDescription,spellsID,spellsName,spellsDescription,lore) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)"

   
   async function getChampionDetails(n){
      const championListFull = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${n}.json`)
         .then(res => {
            return res.data
         })
      let champList = Object.values(championListFull.data)

      await db.query(query, 
         [`${champList[0].id}`, `${champList[0].title}` ,
         [champList[0].tags[0], champList[0].tags[1]], `${champList[0].passive.image.full}` ,
         `${champList[0].passive.name}` , `${champList[0].passive.description}`,
         [champList[0].spells[0].id, champList[0].spells[1].id, champList[0].spells[2].id, 
         champList[0].spells[3].id] , [champList[0].spells[0].name, champList[0].spells[1].name, champList[0].spells[2].name, champList[0].spells[3].name] ,
         [champList[0].spells[0].description, champList[0].spells[1].description, 
         champList[0].spells[2].description, champList[0].spells[3].description] ,
         `${champList[0].lore}`])
   } 

   for (let i = 0; i < listChampions.length; i++) {
      let name = listChampions[i].id
      await getChampionDetails(name)
   }

   console.log('FOI TUDO')
}

async function searchTable(name){
   result = await db.query(`SELECT name,title,tags,passiveImage,passiveName,passiveDescription,
   spellsID,spellsName,spellsDescription,lore FROM champions WHERE name LIKE '${name}%'`)

   return result.rows
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

async function paginatorTable(id1,id2){
   let result
   result = await db.query(`SELECT name,tags FROM champions WHERE id BETWEEN ${id1} AND ${id2}`)

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

   paginatorTable(offset,limit).then(rows => {
      response.send(rows)
   })
   
})

//input de busca
routes.get('/:name', (req, response) => {
   const name = req.params.name
   
   searchTable(name).then(rows => {
      response.send(rows)
   })

})


// routes.get('/champion/details/:name', (req, resp) => {
//    const name = req.params.name
//    getChampionDetails()
//    async function getChampionDetails(){
//       const championListFull = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${name}.json`)
//          .then(res => {
//             return res.data
//          })
//       let champList = Object.values(championListFull.data)
//       resp.send(champList[0])
//    } 
// })


module.exports = routes
