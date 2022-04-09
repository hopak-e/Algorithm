const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => Number(value));

console.log(input[0]+input[1]);
console.log(input[0]-input[1]);
console.log(input[0]*input[1]);
console.log(Math.floor(input[0]/input[1]));
console.log(input[0]%input[1]);