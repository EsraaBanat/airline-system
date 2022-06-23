'use strict';
const event = require('../../events');
const { faker } = require('@faker-js/faker');

const time = new Date(); // => "2022-06-21T14:52:06.086Z"
const airlines = 'Royal Jordanian Airlines'; // => "2022-06-21T14:52:06.086Z"
const destination = `${faker.address.city()} , ${faker.address.countryCode()}` // => "Larrymouth"
const pilot = faker.name.findName(); // Rowan Nikolaus
const flightID = faker.datatype.hexadecimal(10) // '0xaE13F044fb'


event.on('new-flight', flightArrived);


    setInterval(() => {
        let flight = {
            event: 'new-flight',
            time,
            Details: {
                airlines,
                destination,
                pilot,
                flightID,
            }
        };
        console.log("******************************************************");
        console.log(`Manager : a new flight with ${flight.Details.flightID} has been scheduled`);
        event.emit('new-flight', flight);
    }, 10000);
    







function flightArrived(payload) {
    setTimeout(() => {
        console.log(`Manager : we’re greatly thankful for the amazing flight, ${payload.Details.pilot} `);
        }, 8000);
}