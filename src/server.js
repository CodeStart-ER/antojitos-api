// Definición del servidor

const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'anotjitos APIv1'
  })
})

module.exports = app
