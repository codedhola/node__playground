// CREATING AN HTTP CONNECTION
const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("hello ");
}else {
    res.end("404");
}
});


server.listen(3000);


















// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE CODING PRACTICE