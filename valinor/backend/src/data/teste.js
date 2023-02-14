const db = require('./arquivo')

async function createTable(){
   await db.connect()

   // await db.query(`CREATE TABLE evento(
   //    id serial PRIMARY KEY,
   //    nome VARCHAR (20) UNIQUE NOT NULL
   // )`)

   const query = "INSERT INTO champions (champ,tags) VALUES ($1,$2)"

   await db.query(query, ['Peter', ['Lutador','Matador']])

   // const mostra = await db.query(`SELECT * FROM public.evento`)

   await db.end()
   console.log('FOI')
}

createTable()