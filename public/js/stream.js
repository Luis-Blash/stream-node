// Video
const canvas = document.querySelector('#preview');
const context = canvas.getContext('2d');
const btnemitir = document.querySelector('#emitir');

canvas.style.display = 'none'
canvas.width = 512;
canvas.height = 384;

context.width = canvas.width;
context.height = canvas.height;

const video = document.querySelector('#video')

// Funciones
const loadCamara = (stream) => {
    video.srcObject = stream;
}

const verVideo = (video, context) => {
    context.drawImage(video, 0, 0, context.width, context.height)
    socket.emit('stream', canvas.toDataURL('image/webp'))
}

btnemitir.addEventListener('click', () => {
    navigator.getUserMedia = (navigator.getUserMedia || 
        navigator.webkitGetUserMedia|| 
        navigator.mozGetUserMedia || 
        navigator.msgGetUserMedia);

    if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: true }, loadCamara, () => {console.log('error de camara');})
    }

    let intervalo = setInterval(() => {
        verVideo(video, context);
    }, 500);
})