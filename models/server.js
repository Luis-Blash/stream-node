const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        // Rutas
        this.pathRoute = {
            home: '/home'
        }
        //middlewares
        this.middlewares()
        // routes
        this.routes()

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.pathRoute.home, require('../routes/home'))
    }

    listen(){
        this.app.listen(this.port, () =>{console.log(`Port ${this.port}`);})
    }
}

module.exports = Server