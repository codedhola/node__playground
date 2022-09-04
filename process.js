//  * PROCESS MODULE * is global but could be called our also

const platform = process.platform; // RETURN OS PLATFORM
const pid = process.pid; // RETURN PID OF NODE
const uptime = process.uptime(); // RETURNS (N) OF SECONDS NODE PROCESS RUNNING
const version = process.versions  // LIST NODE DEPENDENCIES
const env = process.env; // RETURNS ENVIRONMENT OBJECT

// PROCESS EVENT HANDLERS
process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });
  
  process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
  });
process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});


const writer = getWritableStreamSomehow();
for (let i = 0; i < 100; i++) {
  writer.write(`hello, #${i}!\n`);
}
writer.on('finish', () => {
  console.log('All writes are now complete.');
});
writer.end('This is the end\n');

  









// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE CODING PRACTICE