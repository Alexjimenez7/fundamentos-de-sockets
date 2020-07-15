// importando io declarado en server.js
const { io } = require('../server');


// Luego se puede proceder a comprobar en navegador la siguiente direccion
// http://localhost:3000/socket.io/socket.io.js
// si se ve el contenido de esa libreria todo sta bien

// Detectando conecciones en el backend
io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    // Emitiendo mensaje a los clientes conectados
    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: ' * Bienvenido a esta aplicacion * '
    });

    // conociendo cuando el cliente se desconecta
    // de la aplicacion
    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchando mensajes que el cliente nos envia 
    // se agrego segundo parametro callback
    // que es opcional para notificar al cliente
    // el estado del mensaje recibido
    cliente.on('enviarMensaje', (mensaje, callback) => {

        console.log(mensaje);
        // reenviando datos al cliente de nuevo
        //cliente.emit('enviarMensaje', mensaje);

        // reenviando datos a todos los clientes conectados
        cliente.broadcast.emit('enviarMensaje', mensaje);

        // Notificacion al cliente del estado
        // de esta operacion



        // Ejemplo simulando un estado de recepcion de mensajes
        /*if (mensaje.usuario) {
            callback({
                resp: ' Todo salio BIEN'
            });

        } else {
            callback({
                resp: ' Todo salio MAL (no enviaste usuario) ---'
            });
        }
        */
    });
});