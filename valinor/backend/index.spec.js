const request = require('supertest')
const app = require('./index')
const db = require('./src/data/arquivo')

test('Should connect on Database with champions table', async () => {
   let result
   result = await db.query("Select * From champions")
   expect(result).toBeTruthy()
})

test('Should verify ou create the database', async () => {
   const res = await request(app).get("/")
   expect(res.statusCode).toBe(200)
   let result
   result = await db.query("SELECT COUNT(*) FROM champions")
   
   if(result.rows[0].count != "162"){
      expect(res.body).toEqual('Database created')
   }else{
      expect(result.rows[0].count).toBe("162")
      expect(res.body).toEqual('Database already exists')
   }

});

test('Should send N champions based on pagination', async () => {
   const offset = 0
   const limit = 10
   const res = await request(app).get(`/${offset}/${limit}`)
   expect(res.body).toHaveLength(limit - offset)
})

test('Should send wanted champion', async () => {
   const getNames = await request(app).get(`/0/50`)
   for (let i = 0; i < 50; i++) {
      const name = getNames.body[i].name
      const res = await request(app).get(`/${name}`)
      expect(res.body[0].name).toEqual(name)
   }
})