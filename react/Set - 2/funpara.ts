function add(a: number, b: number): number {
 return a + b;
}
function multiply(a: number, b: number = 1): number {
 return a * b;
}
function divide(a: number = 1, b: number = 1): number {
 if (b === 0) {
 throw new Error("Cannot divide by zero");
 }
 return a / b;
}
function greet1(name: string): void {
 console.log(`Hello, ${name}!`);
}
function logMessage(message: string): void {
 console.log(`Log: ${message}`);
}
console.log("Add (2 params):", add(10, 5));
console.log("Multiply (1 param):", multiply(7));
console.log("Multiply (2 params):", multiply(7, 3));
console.log("Divide (default params):", divide());
console.log("Divide (both params):", divide(20, 4));
greet1("Ravi Lokesh");
logMessage("This is a test message");