module.exports = (io) => {
    io.on('connection', socket => {
        console.log('nuevo usuario conectado');

        //Recogemos los datos:
        socket.on('enviar mensaje', (datos) =>{
            console.log(datos);
    });
})
}