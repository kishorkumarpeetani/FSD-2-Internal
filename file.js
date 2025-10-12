const fs = require('node:fs');

// console.log("First");

// const content = fs.readFileSync("./sample.txt", "UTF-8"); //synchronous

// console.log(content);

// console.log("second");


// //asynchronous

// fs.readFile("./sample.txt", "UTF-8", (error, data)=>{
//     if(error)
//         console.log(error);
//     else
//         console.log(data);
// });

// console.log("Third");

// fs.writeFileSync("./sample2.txt", "Writing into the file");

const fileContent =` HTML, CSS, JAVASCRIPT `;

//append

fs.writeFile("./sample2.txt", fileContent, { flag : 'a'}, (error)=>{
    if(error)
        console.log(error);
    else
        console.log("Written to file");
        
});
