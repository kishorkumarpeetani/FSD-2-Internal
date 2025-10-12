// steps 
//    npm install typescript

//    npx tsc file_name.ts

//    node file_name.js


function add(a:number, b:number = 1):number{
    return a + b;
}

function sub(a:number, b:number):number{
    return a - b;
}

function divide(a:number, b:number):void{
    if(b === 0) console.log("Cannot divide by zero !!");

    else  
        console.log(a / b);
}

function greet(name:string):void{
    console.log(`Hello !! ${name}`);
}

console.log(add(1));
console.log(add(1, 9));
console.log(sub(1,2));
greet("kishor");