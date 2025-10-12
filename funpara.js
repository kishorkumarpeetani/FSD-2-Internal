function add(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function greet(name) {
    console.log("Hello !! ".concat(name));
}
console.log(add(1));
console.log(add(1, 9));
console.log(sub(1, 2));
greet("kishor");
