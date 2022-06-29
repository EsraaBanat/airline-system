'use strict';
require('dotenv').config();
const port = process.env.PORT;
const msgQueue = {
    flights: {
        
    }
}


const ioServer = require('socket.io')(port);
const airline = ioServer.of('/airline');


ioServer.on('connection', (socket) => {

    console.log(`Manager is connected at ID: ${socket.id}`);

    socket.on('new-flight', (payload) => {
        console.log('Manager is adding New Flight');
        let Flight = payload;
        console.log("Flight ", Flight);
        const id = Flight.Details.flightID;
        msgQueue.flights[id]=payload;
        airline.emit('new-flight',payload);
        console.log('msgQueue',msgQueue);
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
    
    socket.on('get_all', () => {
        console.log('get all flights');
        // Object.keys(msgQueue.flights).forEach((id) => {
        socket.emit('flights', {
            id: id,
            payload: msgQueue.flights[id]
        })
    // });
    });

    socket.on('recived', (flight) => {
        delete msgQueue.flights;
        console.log('flights deleted');
    });

});


