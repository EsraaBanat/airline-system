'use strict';
const event = require('../../events');


event.on('new-flight', handletookoff);
event.on('new-flight', handlearrived);


function handletookoff(payload) {
    // console.log('Frommm sys to piolet',payload);
     setTimeout(() => {
        payload.event = 'took-off';
        payload.time  = new Date();
        console.log(`Pilot: flight with ID ‘${payload.Details.flightID}’ took-off`);
        event.emit('took-off', payload);
        // console.log('Afterrrrrrrrrv Frommm sys to piolet',payload);
    }, 4000);
    // clearInterval(setInterval);
}

function handlearrived(payload) {
    // console.log('Frommm sys to piolet',payload);
     setTimeout(() => {
        payload.event = 'arrived';
        payload.time  = new Date();
        console.log(`Pilot: flight with ID '${payload.Details.flightID}' has arrived`);
        event.emit('arrived', payload)
        // console.log('Afterrrrrrrrrv Frommm sys to piolet',payload);
    }, 7000);
    // clearInterval(setInterval);
}
