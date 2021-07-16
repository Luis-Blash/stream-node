const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        // Server
        this.server = require('http').createServer(this.app)
        this.io = require('socket.io')(this.server);

        // Rutas
        this.pathRoute = {
            emit: '/emicion',
            client: '/cliente'
        }
        //middlewares
        this.middlewares()
        // routes
        this.routes()

        // socket
        this.sockets()

    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.pathRoute.client, require('../routes/cliente'))
    }

    sockets(){
        this.io.on('connection', socket => {
            console.log('Cliente conectado', socket.id);

            socket.on('stream',(imagen)=>{
                // emitir el evento a los sockets 
                socket.broadcast.emit('stream',imagen)
            })

            socket.on('disconnect', ()=>{
                console.log('Cliente desconectado');
            })
        });
    }

    listen() {
        // this.app.listen(this.port, () => { console.log(`Port ${this.port}`); })
        this.server.listen(this.port, () => { console.log(`Server Port ${this.port}`); })
    }
}

module.exports = Server