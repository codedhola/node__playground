// THE EVENT EMITTER IS A WAY TO REGISTER AN EVENT TO BE TRIGGERED 
// WHEN IT'S CALLED

const eventEmitter = require("events");


// THIS CALLS THE EVENTS CLASS 
const events = new eventEmitter();

events.on("click", (name) => { // REGISTER AN EVENT
    console.log("hello " + name);
})

events.once("touch", (first) => { // METHOD FOR A SINGLE EVENT
    console.log("how many times can i touch?" + first);
})

events.emit('click', "shola"); // CALLS AN EVENT

events.emit("touch", "once");
events.emit("touch", "Twice"); // THIS IS IGNORED



const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5, 6);



// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener









// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE CODING PRACTICE