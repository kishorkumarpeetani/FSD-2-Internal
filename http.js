const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res)=>{

    res.writeHead(200, { "content-Type" : "text/html" });

    const html = fs.readFileSync("./index.html", "UTF-8");

    res.end(html);
});

server.listen(3000, ()=>{
    console.log("server running");
});