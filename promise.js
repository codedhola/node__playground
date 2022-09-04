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



