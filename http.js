// CREATING AN HTTP CONNECTION
const http = require("http");

const name = {name: "codedhola"}
const server = http.createServer((req, res) => {
    if(req.url === "/") {
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


server.listen(3000);


















// Aurthor: CODED-HOLA
// Based on my 100DAYSOFCODE CODING PRACTICE