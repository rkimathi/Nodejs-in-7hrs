const os = require('os');
const path = require('path');
const {add, subtract, multiply, divide} = require('./math')

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);

console.log(path.parse(__filename));

console.log(add(10, 4));
console.log(multiply(10, 4));
console.log(divide(10, 4));
console.log(subtract(10, 4));