// Definición del servidor

const express = require('express')

const tacosRouter = require('./routes/tacos')

const app = express()

app.use(express.json())

app.use('/tacos', tacosRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'anotjitos APIv1'
  })
})

module.exports = app

// cada vez que quiera crear un ENDPOINT nuevo el proceso es:
// paso 1: irnos desde atras en el modelo de arquitectura limpia. asegurarnos de tener nuestro modelo (acceso a datos), si no existe, lo creamos
// paso 2: Crear eñl (los) casos de uso necesarios para esa acción
// paso 3: Crear nuestro ENDPOINT y conectarlo al (los) casos de uso correspondientes

