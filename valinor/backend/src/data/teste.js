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

   const query = "INSERT INTO champions (champ,tags) VALUES ($1,$2)"

   for (let i = 0; i < s.length; i++) {
      await db.query(query, [`${s[i].id}`, [s[i].tags[0],s[i].tags[1]]])
      console.log(`Foi ${i}`)
   }

   result = await db.query("SELECT * FROM champions")


   await db.end()
}



async function showTable(){
   await db.connect()
   let result
   result = await db.query("SELECT * FROM champions")

   await db.end()
   return result.rows
}

async function fatiaTable(id1,id2){
   await db.connect()
   let result
   result = await db.query(`SELECT champ,tags FROM champions WHERE id BETWEEN ${id1} AND ${id2}`)

   await db.end()
   return result.rows
}

async function countTable() {
   await db.connect()
   let result
   result = await db.query("SELECT COUNT(*) FROM champions")

   await db.end()
   return result.rows[0].count

}

countTable().then(res => {
   return res
})

if(countTable() !== '162'){
   console.log('NAO')
}else{
   console.log('SIM')
}

// countTable().then(console.log(dataChampions))
