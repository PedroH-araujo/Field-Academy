const express = require('express')
const axios = require('axios')
const routes = express.Router()
const db = require('../src/data/arquivo')
let dataChampions = 'false'

//Cria DataBase
async function createTable(listChampions) {

   const query = "INSERT INTO champions (name,title,tags,passiveImage,passiveName,passiveDescription,spellsID,spellsName,spellsDescription,lore) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)"
   const querySkins = "INSERT INTO champions (skins) VALUES ($1) WHERE id = 334"

   for (let i = 161; i < listChampions.length; i++) {
      let name = listChampions[i].id
      await getChampionDetails(name)
   }

   async function getChampionDetails(n) {
      const championListFull = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${n}.json`)
         .then(res => {
            return res.data
         })
      let champList = Object.values(championListFull.data)

      let champ = champList[0]
         async function getSkins(){
            for (let index = 0; index < champ.skins.length; index++) {
               await db.query(querySkins, [[champ.skins[index].num]])
            }
         }


      await db.query(query,
         [`${champ.id}`, `${champ.title}`,
         [champ.tags[0], champ.tags[1]], `${champ.passive.image.full}`,
         `${champ.passive.name}`, `${champ.passive.description}`,
         [champ.spells[0].id, champ.spells[1].id, champ.spells[2].id,
         champ.spells[3].id], [champ.spells[0].name, champ.spells[1].name,
         champ.spells[2].name, champ.spells[3].name],
         [champ.spells[0].description, champ.spells[1].description,
         champ.spells[2].description, champ.spells[3].description],
         `${champ.lore}`]).then(console.log('CRIEI'), getSkins())

      }
      

}

//Busca um champion
async function searchTable(name) {
   result = await db.query(`SELECT name,title,tags,passiveImage,passiveName,passiveDescription,
   spellsID,spellsName,spellsDescription,lore FROM champions WHERE name LIKE '${name}%'`)

   return result.rows
}

//Condicional para saber se a base de dados ja foi criada
async function countTable() {

   let result
   result = await db.query("SELECT COUNT(*) FROM champions")

   return result.rows[0].count
}

//paginação
async function paginatorTable(id1, id2) {
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
      dataChampions = await countTable()
      if (dataChampions !== '162') {
         createTable(champList)
      }
      response.json('DataBase criada')
   }
})

//Paginação
routes.get('/:offset/:limit', (req, response) => {
   const offset = req.params.offset
   const limit = req.params.limit

   paginatorTable(offset, limit).then(rows => {
      response.send(rows)
   })

})

//Busca Champions
routes.get('/:name', (req, response) => {
   const name = req.params.name

   searchTable(name).then(rows => {
      response.send(rows)
   })

})


module.exports = routes
