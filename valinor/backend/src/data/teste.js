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

   const query = "INSERT INTO champions (name,tags) VALUES ($1,$2)"

   for (let i = 0; i < s.length; i++) {
      let name = s[i].id
      console.log(name)
   }

   result = await db.query("SELECT * FROM champions")


   await db.end()
}

createTable()
