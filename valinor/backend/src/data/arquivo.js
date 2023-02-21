const pg = require('pg')

const client = new pg.Client({
   user:'postgres',
   host:'localhost',
   database:'meudb',
   password:'123456',
   port:5432
})
// const client = new pg.Client({
//    user:'postgres',
//    host:'containers-us-west-135.railway.app',
//    database:'railway',
//    password:'arB8zklm0zkKU5iAS9hN',
//    port:6253
// })

module.exports = client