const db = require('./arquivo')
let dataChampions = 0

let s = [{ "id": "Ahri",
"tags": [
   "Mage",
   "Assassin"
 ]},{ "id": "Aatrox",
 "tags": [
   "Fighter",
   "Tank"]}
]

async function createTable(){
   await db.connect()

   // await db.query(`CREATE TABLE evento(
   //    id serial PRIMARY KEY,
   //    nome VARCHAR (20) UNIQUE NOT NULL
   // )`)
   try {
      await db.query('Select * From champions')
      dataChampions = true
   } catch (error) {
      console.log('ERRO')
      dataChampions = false
   }

   if(!dataChampions){
      await db.query(`CREATE TABLE Champions(
         id serial NOT NULL PRIMARY KEY,
         name varchar,
         title varchar,
         tags varchar[] NOT NULL,
         passiveImage varchar,
         passiveName varchar,
         passiveDescription varchar,
         spellsID varchar[],
         spellsName varchar[],
         spellsDescription varchar[],
         lore varchar,
         skins varchar[],
         skinsName varchar[]
         )`)
   }
   // if(Array.from(result.rows) == []){
   //    console.log('SIM')
   // }else{
   //    console.log('NAO')
   // }
   // console.log(result.rows)

   await db.end()
}

createTable()

async function countTable() {

      db.connect().then(console.log('Conect'))
      .catch(console.error('Nao conect'))




   await db.end()

}

// countTable().then(rows => {
//    console.log(rows)
//    dataChampions = rows
//    if(dataChampions === '162'){
//       console.log('sim')
//    }

// })




