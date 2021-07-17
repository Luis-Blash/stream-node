// Usuario conectado
//div
const ponernombre = document.querySelector('#ponernombre')
const servicio = document.querySelector('#servicio')
// datos
const msgusuario = document.querySelector('#msgusuario')
const txtUsuario = document.querySelector('#txtUsuario')
const btnUsuarios = document.querySelector('#btnUsuarios')
const nombreusuario = document.querySelector('#nombreusuario')

// Usuario
btnUsuarios.addEventListener('click', () => {
    if (!txtUsuario.value == '') {
        servicio.style.display = '';
        nombreusuario.innerHTML = txtUsuario.value;
        ponernombre.style.display = 'none';
    }
})


// Para los mensajes
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')
const chat = document.querySelector('.chat')

btnEnviar.addEventListener('click', () => {
    if (!txtMensaje.value == '') {
        const mensaje = txtMensaje.value;
        const payload = {
            id: nombreusuario.innerHTML,
            mensaje,
        }
        socket.emit('enviar-mensaje', payload);
        txtMensaje.value = ''
        const span = document.createElement('p')
        span.innerHTML = `${nombreusuario.innerHTML}: ${mensaje}`
        span.classList = 'emisor'
        chat.appendChild(span)
    }
})

socket.on('enviar-mensaje', ({id, mensaje}) => {
    const span = document.createElement('p')
    span.innerHTML = `${id}: ${mensaje}`
    span.classList = 'receptor'
    // span.classList = 'receptor'
    chat.appendChild(span)
})