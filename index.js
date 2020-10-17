// este archivo se encarga de levantar todos los servicios

// el dotenv debe ser la primera línea en ejecutarse
require('dotenv').config()

/*
// equivalente a
const dotenv = require(dotenv)
dotenv.config
*/

console.log('env: ', process.env.DB_USER)
