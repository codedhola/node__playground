// PATH SYSTEM MODULE
const path = require("path");

// BASENAME PATH
const baseName = path.basename(__filename);

// DIRECTORY PATH
const dirName = path.dirname(__filename);

// EXTENTION PATH
const fileName = path.extname(__filename);

// PARSER FUNCTION
const parser = path.parse(__filename).base;

// JOIN PATH FUNCTION
const join = path.join(__dirname, "test", "Joining paths");

console.log(`
${baseName}
${dirName}
${fileName}
${parser}
${join}
`);







// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE CODING PRACTICE