const db = require('./arquivo')

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

showTable().then(e => console.log(e))

