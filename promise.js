// A PROMISE CREATION EXAMPLE 
const fs = require("fs");

function getFile(file){
    return new Promise((resolve, reject) => {
        const data = fs.readFileSync(file, "utf-8");
        resolve(data);
    });
}

module.exports = { 
    getFile
}

// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE CODING PRACTICE
