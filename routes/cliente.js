const {Router} = require('express')

const { clienteImagen, emisorCliente } = require('../controller/cliente')

const route = Router()

route.get('/', clienteImagen)

route.get('/emisor', emisorCliente)

module.exports = route