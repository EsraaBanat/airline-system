'use strict';
require('dotenv').config();
const port = process.env.PORT;

const io = require('socket.io-client');
let host = `http://localhost:${port}/airline`;

const systemConnection = io.connect(host);


systemConnection.on('new-flight', handletookoff);
systemConnection.on('new-flight', handlearrived);


function handletookoff(payload) {

    setTimeout(() => {
        payload.event = 'took-off';
        payload.time = new Date();
        console.log(`Pilot: flight with ID ‘${payload.Details.flightID}’ took-off`);
        systemConnection.emit('took-off', payload);

    }, 4000);

}

function handlearrived(payload) {

    setTimeout(() => {
        payload.event = 'arrived';
        payload.time = new Date();
        console.log(`Pilot: flight with ID '${payload.Details.flightID}' has arrived`);
        systemConnection.emit('arrived', payload);
    }, 7000);

}
