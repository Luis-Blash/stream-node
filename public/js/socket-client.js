const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

// Socket
const socket = io();

// Servidor conectado
socket.on('connect', () => {
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
    servicio.style.display = 'none'
})
socket.on('disconnect', () => {
    // console.log('Desconectado');
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
    servicio.style.display = 'none'
    ponernombre.style.display = 'none'
})

// Recibir Video
socket.on('stream', imagen => {
    let img = document.getElementById('play');
    img.src = imagen;
})