 // Detectando conecciones en el front end
 var socket = io();
 socket.on('connect', function() {
     console.log('Conectado al servidor');

 });

 socket.on('disconnect', function() {
     console.log('Perdimos conección con servidor');
 });

 // Enviar informacion al servidor
 //socket.emit('enviarMensaje', '123');
 // Enviando un objeto 
 socket.emit('enviarMensaje', {
     usuario: 'Alex',
     mensaje: 'Hola mundo'
 }, function(respuesta) {
     // El parametro respuesta es opcional
     console.log('Se disparo el callback');
     console.log('Respuesta server :', respuesta);
     // Este es el metodo callback
     // que se llama desde el server 
     // esta funcion es opcional y sirve
     // para ser notificados sobre el estado
     // del objeto que enviamos en el metoo emit
 });

 // Escuchando mensajes que vienen desde el servidor
 socket.on('enviarMensaje', function(mensaje) {
     console.log(mensaje);
 });