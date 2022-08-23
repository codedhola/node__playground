
// The 'FILE SYSTEM' : Asynchronous  ||  Synchronous 
// WOULD ONLY DO SYNCHRONOUS METHOD FOR READFILE AND WRITEFILE
const fs = require("fs"); // File system module

// READFILE MODULES Asynchronous
fs.readFile("readme.txt","utf-8", (err, data) => { //  utf-8 returns a raw text of the data 
    if(err) throw err;
    console.log(data);
});

// Synchronous => * Accepts no call-back
try {
    // Synchronous Method has to be wrapped in try-catch block in order to throw error
    const data = fs.readFileSync("readme.txt", "utf-8");
    console.log(data);
}catch(error){
    console.log(error);
}

// WRITEFILE MODULES Asynchronous 
let data =  " This has been re-written by the writeFIle system module"; // data to write
fs.writeFile("read.txt", data, "utf-8", (err) => {
    if(err) throw err;
    console.log("FIle has been written successfully...");
});

// Synchronous
data += " added the synchronous method";
try {
    const log = fs.writeFileSync("read.txt", data, "utf-8");
    console.log(log);
}catch(err){
    throw err;
}

// APPEND FILE 
const fileData = " This 'METHOD' adds data to the selected file";
fs.appendFile("read.txt", fileData, (err) => {
    if(err) throw err;
    console.log("File appended successfully");
});

// COPY FILE
fs.copyFile("read.txt", "newcopy.txt", (err) =>{
    if(err) throw err;
    console.log("Created a copy of 'read.txt' into newcopy.txt");
});

// UNLINK : TO DELETE A FILE
fs.unlink("newcopy.txt", (err) => {
    if(err) throw err;
    console.log("File has been deleted successfully...");
});






// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE PRACTICE