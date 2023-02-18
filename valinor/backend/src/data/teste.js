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


   var a = "Battle Boss BelVeth";
   var b = a.replace(/'/g, '');
   console.log(b);


