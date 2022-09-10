// CREATING AN HTTP CONNECTION
const http = require("http");

const name = {name: "codedhola"}

// CREATES A SIMPLE HTTP SERVER => { REQ, RES}
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(name));
        res.end();
}else if(req.url === "/api"){
        res.write("LOADING API CALLS");
        res.end();
}
else {
    res.end("404");
}
});

// PORT LISTENING TO
server.listen(3000);

// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE CODING PRACTICE