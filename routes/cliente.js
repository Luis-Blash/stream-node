const {Router} = require('express')

const { clienteImagen } = require('../controller/cliente')

const route = Router()

route.get('/', clienteImagen)

module.exports = route