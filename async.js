// A SIMPLET PRACTICE OF ASYNC-AWAIT
const {getFile}  = require("./promise.js");

async function final(){
    const data = await getFile("./readme.txt");
    console.log(data);
}

final();

// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE CODING PRACTICE
