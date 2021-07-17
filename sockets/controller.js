

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('stream',(imagen)=>{
        // emitir el evento a los sockets 
        socket.broadcast.emit('stream',imagen)
    })

    socket.on('disconnect', ()=>{
        // console.log('Cliente desconectado');
    })

    // mensaje
    socket.on('enviar-mensaje', (payload, callback) =>{
        // this.io.emit = a todos y a el mismo.
        // Se lo a todos menos a el
        socket.broadcast.emit('enviar-mensaje', payload)
        const id = '123'
        callback(id);

    })
}

module.exports = {
    socketController
}
