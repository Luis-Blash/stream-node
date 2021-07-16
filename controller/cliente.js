const { response } = require("express");


const clienteImagen = (req, res = response)=>{
    res.redirect('cliente.html')
}

module.exports = {
    clienteImagen
}