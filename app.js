//Making a function 
function theFirstFunction(name) {
    console.log('Hi, my name is ' + name + " and the details of the file which i'm working on can be found below");
}

theFirstFunction('Praise');


// Getting the path of the required file which I'm working on
const path = require('path');

let pathObj = path.parse(__filename);
console.log(pathObj);

// Getting the OS of my Machine, total memory and others
const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`The Total Memory is:  ${totalMemory}`);
console.log(`The Free Memory is:  ${freeMemory}`);







// Making an Event and a listener
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Registering a Listener
logger.on('Logging',  (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');




// // Using the Timeout global object
// setTimeout(() => {
//     console.log('This is how the Timeout works');
// }, 4000);



// Working with HTTP module
const http = require('http');

// Creating server connections
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('A New connection has been established.');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7]));
        res.end();
    }
});

server.listen(3000);


//console.log("Server is running on port 3000...");


// const express = require('express');

// console.log(express);