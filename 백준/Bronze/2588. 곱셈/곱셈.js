const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>+v);

let one = input[1]%10;
let ten = (input[1]%100-one)/10;
let hun = Math.floor(input[1]/100);

console.log(input[0]*one);
console.log(input[0]*ten);
console.log(input[0]*hun);
console.log(input[0]*input[1]);