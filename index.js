// este archivo se encarga de levantar todos los servicios

// el dotenv debe ser la primera línea en ejecutarse
require('dotenv').config()

/*
// equivalente a
const dotenv = require(dotenv)
dotenv.config
*/

const db = require('./src/lib/db')
const server = require('./src/server')

console.log('env: ', process.env.DB_USER)

const { PORT = 3030 } = process.env

db.connect()
  .then(() => {
    console.log('DB connected')
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(error => {
    console.error('DB ERROR: ', error)
  })
