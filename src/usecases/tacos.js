
const Tacos = require('../models/tacos')

function getAll () {
  return Tacos.find()
}

function getById (id ) {
  return Tacos.findById(id)
}

function create (tacoData) {
  return Tacos.create(tacoData)
}

function deleteById (id) {
  return Tacos.findByIdAndDelete(id)
}

function updateById(id, newTacoData) {
  return Tacos.findByIdAndUpdate(id, newTacoData)
}

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById
}
