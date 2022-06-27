'use strict';
require('dotenv').config();
const port = process.env.PORT;

const ioServer = require('socket.io')(port);
const airline = ioServer.of('/airline');


ioServer.on('connection', (socket) => {

    console.log(`Client is connected at ID: ${socket.id}`);

    socket.on('new-flight', (payload) => {
        let flight = payload;
        console.log("Flight ", flight);
        airline.emit('new-flight',flight);
    });

});

airline.on('connection', (socket) => {

    console.log(`Pilot is connected at ID: ${socket.id}`);


    socket.on('took-off', (payload) => {
        let flight = payload;
        console.log("Flight ", flight);
        // airline.emit('took-off',flight);
    });
    
    socket.on('arrived', (payload) => {
        let flight = payload;
        console.log("Flight ", flight);
        ioServer.emit('arrived',flight);
    });

});


