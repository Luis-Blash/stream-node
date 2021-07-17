// JavaScript para canvas
const canvas = document.querySelector('#preview');
const context = canvas.getContext('2d');
const btn =  document.querySelector('#emitir');

canvas.style.display = 'none'
canvas.width = 512;
canvas.height = 384;

context.width = canvas.width;
context.height = canvas.height;

const video = document.querySelector('#video')

// Funciones para manejar
function mensajeCamara(msg) {
    document.querySelector('.camara-status').innerText = msg;
}

function loadCamara(stream) {
    video.srcObject = stream;
    mensajeCamara('Funcionado camara')
}

function errorCamara() {
    mensajeCamara('Camara ha Fallado')
}

// Fernando
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')


// Socket
const socket = io();

function verVideo(video, context) {
    context.drawImage(video, 0,0, context.width, context.height);
    socket.emit('stream', canvas.toDataURL('image/webp'))
}

btn.addEventListener('click', () =>{
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia
        || navigator.mozGetUserMedia || navigator.msgGetUserMedia);

    if(navigator.getUserMedia) {
        navigator.getUserMedia({video: true},loadCamara, errorCamara)
    }
    
    let intervalo = setInterval(() => {
        verVideo(video, context);
    }, 500);
})

socket.on('connect', ()=>{
    // console.log('Conectado');
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', ()=>{
    // console.log('Desconectado');
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})