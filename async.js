const {getFile}  = require("./promise.js");

async function final(){
    const data = await getFile("./readme.txt");
    console.log(data);
}

final();