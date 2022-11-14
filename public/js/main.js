$(function() {
    const socket = io();
    //Accedemos a los elementos del DOM (aceptar la celda)

    const Botonaceptar = $('#aceptar');

    //Eventos

    Botonaceptar.click (e =>{
        e.preventDefault();
        socket.emit('enviar mensaje', console.log('prueba'));
        });
})