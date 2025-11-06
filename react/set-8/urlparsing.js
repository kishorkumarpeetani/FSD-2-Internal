const url = require("url");

const myUrl  = "https://www.example.com:8800/webpage/index.html?user=kk&id=M4#sectionD";

const parsedUrl = url.parse(myUrl ,true);

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.hostname);
console.log(parsedUrl.port);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.hash);