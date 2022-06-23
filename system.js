'use strict';
const event = require('./events');
require('./system-parts/manager/manager');
require('./system-parts/pilot/pilot');

event.on('new-flight', (payload) => {
    // console.log('From manager',payload);
    let flight = payload;
    console.log("Flight ", flight);
    // console.log("new Flight ");
});
event.on('took-off', (payload) => {
    // console.log('From Piolet to sys',payload);
    let flight = payload;
    console.log("Flight ", flight);
    // console.log("took-off");
});
event.on('arrived', (payload) => {
    // console.log('From Piolet to sys',payload);
    let flight = payload;
    console.log("Flight ", flight);
    // console.log("arrived");

});


