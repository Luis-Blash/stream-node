const path = require('path');
const { response } = require("express");


const clienteImagen = (req, res = response)=>{
    res.sendFile(path.join(__dirname,'../public/cliente.html'))
}

const emisorCliente = (req, res = response)=>{
    res.sendFile(path.join(__dirname,'../public/emisor.html'))
}

module.exports = {
    clienteImagen,
    emisorCliente
}