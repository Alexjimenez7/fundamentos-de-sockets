const express = require('express');
const socketIO = require('socket.io');
const http = require('http'); // servidor http por default de nodejs


const path = require('path');
const { callbackify } = require('util');

const app = express();

// montar servidor con la configuracion de express
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = mantiene coneccion del backend
// let io = socketIO(server); // asi se tenia antes de separ el codigogo

// asi se dejo para poderlo usar en
// socket/socket.js

module.exports.io = socketIO(server);
require('./sockets/socket');

//------------

// aqui tenia app. y se cambio por server
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});