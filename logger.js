//Raising an event
const EventEmitter = require('events');

// Creating a variable 
let url = 'http://gidicodes.com';

class Logger extends EventEmitter {
    log(message) {
    // Send a HTTP request
    console.log(message);

    // Raising another event
    this.emit('Logging', {id: 3, url: 'https://thepraise.netlify.app'});
    }
}

module.exports = Logger;