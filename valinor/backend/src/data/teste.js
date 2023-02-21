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
   let result = await db.query('Select * From champions')
   if(Array.from(result.rows) == []){
      console.log('SIM')
   }else{
      console.log('NAO')
   }
   console.log(result.rows)

   await db.end()
}

createTable()

async function countTable() {
   await db.connect()
   let result
   result = await db.query("SELECT COUNT(*) FROM champions")
   await db.end()
   return result.rows[0].count
}

// countTable().then(rows => {
//    console.log(rows)
//    dataChampions = rows
//    if(dataChampions === '162'){
//       console.log('sim')
//    }

// })




