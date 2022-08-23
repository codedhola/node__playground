//  THE 'READLINE' MODULE READ DATA FROM READABLE STREAM
//  USED FOR THE COMMAND LINE INTERFACE

// const readline = require('readline');  // READLINE INTERFACE

// const rl = readline.createInterface({ // INTERFACE TO READ
//   input: process.stdin,
//   output: process.stdout
// });

// const quest = rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'coded hola: > ' // PROMPT THE USER 
});

rl.prompt(); //  CALL PROMPT FUNCTION

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});









// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE CODING PRACTICE