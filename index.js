const fs = require('node:fs');

console.log("First");

const content = fs.readFileSync("sample.txt", "UTF-8");

console.log(content);

console.log("second");

fs.readFile("sample.txt", "UTF-8", (error, data)=>{
    if(error)
        console.log(error);
    else
        console.log(data);
});

console.log("Third");